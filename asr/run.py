import traceback, numpy as np, glob, os
out=[]
try:
    from faster_whisper import WhisperModel
    m = WhisperModel('small.en', device='cpu', compute_type='int8')
    for f in sorted(glob.glob('asr/*.f32')):
        n=os.path.basename(f)[:-4]
        audio = np.fromfile(f, np.float32)
        for vad in ([False,True] if 'clip' in n or 'tail' in n else [False]):
            segs, _ = m.transcribe(audio, word_timestamps=True, condition_on_previous_text=False, vad_filter=vad)
            out.append(f"=== {n}{'_vad' if vad else ''}")
            for s in segs:
                for w in s.words:
                    out.append(f"{w.start:.2f} {w.end:.2f} {w.word}")
except Exception:
    out.append(traceback.format_exc())
open('asr/words.txt','w').write("\n".join(out))
