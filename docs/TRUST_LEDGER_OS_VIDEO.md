# Trust Ledger OS Video

## 2-Minute Video Plan

1. Title card
2. Risk dashboard
3. PRISM trace view
4. Prelint review
5. GIDE edit flow
6. Ledger entry

## FFmpeg

```bash
ffmpeg \
  -loop 1 -t 20 -i screenshots/01-hero.png \
  -loop 1 -t 20 -i screenshots/02-risk-dashboard.png \
  -loop 1 -t 20 -i screenshots/03-prism-trace.png \
  -loop 1 -t 20 -i screenshots/04-prelint-review.png \
  -loop 1 -t 20 -i screenshots/05-gide-edit.png \
  -loop 1 -t 20 -i screenshots/06-ledger-entry.png \
  -filter_complex "[0:v][1:v][2:v][3:v][4:v][5:v]concat=n=6:v=1:a=0,format=yuv420p" \
  -r 30 -c:v libx264 trust-ledger-os-demo.mp4
```
