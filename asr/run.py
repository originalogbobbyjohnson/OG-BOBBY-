import traceback
try:
    from faster_whisper import WhisperModel
    m = WhisperModel('small.en', device='cpu', compute_type='int8')
    import subprocess, numpy as np
    raw = subprocess.run(['ffmpeg','-v','error','-i','asr/tail.mp3','-ac','1','-ar','16000','-f','f32le','-'],capture_output=True,check=True).stdout
    audio = np.frombuffer(raw, np.float32)
    segs, _ = m.transcribe(audio, word_timestamps=True, condition_on_previous_text=False)
    out = []
    for s in segs:
        for w in s.words:
            out.append(f"{w.start+150:.2f} {w.end+150:.2f} {w.word}")
    open('asr/words.txt', 'w').write("\n".join(out))
except Exception:
    open('asr/words.txt', 'w').write(traceback.format_exc())
