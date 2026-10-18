import traceback, numpy as np
out=[]
try:
    from faster_whisper import WhisperModel
    m = WhisperModel('small.en', device='cpu', compute_type='int8')
    for n in ['wit','rb','brn']:
        audio = np.fromfile(f'asr/{n}.f32', np.float32)
        segs, _ = m.transcribe(audio, word_timestamps=True, condition_on_previous_text=False, vad_filter=False)
        out.append(f"=== {n}")
        for s in segs:
            for w in s.words:
                out.append(f"{w.start:.2f} {w.end:.2f} {w.word}")
except Exception:
    out.append(traceback.format_exc())
open('asr/words.txt','w').write("\n".join(out))
