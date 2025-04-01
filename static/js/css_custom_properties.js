CSS.registerProperty({
    name: '--x',
    syntax: '<length-percentage>',
    initialValue: '0%',
    inherits: true
});

CSS.registerProperty({
    name: '--y',
    syntax: '<length-percentage>',
    initialValue: '0%',
    inherits: true
});

function pointFromCenter(xPercentage, yPercentage) {
    const xDistance = Math.abs(xPercentage - 50);
    const yDistance = Math.abs(yPercentage - 50);
    const maxDistance = Math.sqrt(50 * 50 + 50 * 50);
    const actualDistance = Math.sqrt(xDistance * xDistance + yDistance * yDistance);
    return actualDistance / maxDistance;
}