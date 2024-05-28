function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

setInterval(() => {
    // Create a clone of an element with ID "templateTriangle":
    const originalElement = document.querySelector('#templateTriangle');
    const clonedElement = originalElement.cloneNode(true);

    // Change the ID attribute of the newly created element (optional):
    clonedElement.setAttribute('id', 'triangle');

    // Append the cloned element to the DOM (e.g., inside a <div>):
    document.querySelector('#trianglesContainer').appendChild(clonedElement);

    var randomTimeout = getRandomArbitrary(30, 60);
    var randomSize = getRandomInt(64, 192);
    var randomPosition = getRandomInt(0, 200);

    var axis = 10

    var randomAxisX = getRandomArbitrary(-axis, axis);
    var randomAxisY = getRandomArbitrary(-axis, axis);
    var randomAxisZ = getRandomArbitrary(-axis, axis);
    var randomRotation = getRandomArbitrary(-720, 720);

    var randomImage = getRandomInt(1, 3)

    // position and scale the triangle
    clonedElement.style.top = (200 - randomPosition) + "%"
    clonedElement.style.width = randomSize + "px"
    clonedElement.style.height = randomSize + "px"

    clonedElement.style.setProperty('--triangleAxisX', randomAxisX);
    clonedElement.style.setProperty('--triangleAxisY', randomAxisY);
    clonedElement.style.setProperty('--triangleAxisZ', randomAxisZ);
    clonedElement.style.setProperty('--triangleRotation', randomRotation + "deg");

    // set the trangle image
    clonedElement.setAttribute('src', "t/" + randomImage + ".png")

    // make the triangle visible
    setTimeout(() => {
        var newRandomAxisX = getRandomArbitrary(-axis, axis);
        var newRandomAxisY = getRandomArbitrary(-axis, axis);
        var newRandomAxisZ = getRandomArbitrary(-axis, axis);
        var newRandomRotation = getRandomArbitrary(-720, 720);

        clonedElement.style.setProperty('--triangleDuration', randomTimeout + "s");
        
        clonedElement.style.visibility = "visible"
        
        // spin the triangle
        clonedElement.style.setProperty('--triangleAxisX', newRandomAxisX);
        clonedElement.style.setProperty('--triangleAxisY', newRandomAxisY);
        clonedElement.style.setProperty('--triangleAxisZ', newRandomAxisZ);
        clonedElement.style.setProperty('--triangleRotation', newRandomRotation + "deg");

        // move the triangle
        clonedElement.style.left = "-200vh"
        clonedElement.style.top = (100 - randomPosition - 200) + "%"
    }, 100);

    setTimeout(() => {
        clonedElement.remove()
    }, randomTimeout * 500) + 100;
}, 500);