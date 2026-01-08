## 2024-05-23 - [Layout Thrashing in Animation Loop]
**Learning:** Calling `getBoundingClientRect()` inside a `requestAnimationFrame` loop forces a synchronous layout recalculation on every frame, which kills performance. This is especially bad if styles are also being written in the same loop (Read-Write-Read-Write cycle).
**Action:** Cache layout dimensions outside the animation loop and update them only when necessary (e.g., on `resize` or `scroll` events).
