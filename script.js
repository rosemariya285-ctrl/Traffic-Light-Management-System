// Traffic Light Vehicle Queue Management System
// Queue principle: FIFO (First In, First Out)

const vehicleQueue = [];

let signal = "RED";

const vehicleForm = document.getElementById("vehicleForm");
const vehicleInput = document.getElementById("vehicleInput");
const queueList = document.getElementById("queueList");
const queueCount = document.getElementById("queueCount");
const nextVehicle = document.getElementById("nextVehicle");
const queueStatus = document.getElementById("queueStatus");
const signalStatus = document.getElementById("signalStatus");
const signalMessage = document.getElementById("signalMessage");
const message = document.getElementById("message");

const redLight = document.getElementById("redLight");
const yellowLight = document.getElementById("yellowLight");
const greenLight = document.getElementById("greenLight");

function showMessage(text, type = "") {
    message.textContent = text;
    message.className = "message";
    if (type) message.classList.add(type);
}

function updateSignalDisplay() {
    redLight.classList.toggle("active", signal === "RED");
    yellowLight.classList.toggle("active", signal === "YELLOW");
    greenLight.classList.toggle("active", signal === "GREEN");

    if (signal === "RED") {
        signalStatus.textContent = "RED — Stop";
        signalMessage.textContent = "Vehicles must wait in the queue.";
    } else if (signal === "GREEN") {
        signalStatus.textContent = "GREEN — Go";
        signalMessage.textContent = "The front vehicle may pass.";
    } else {
        signalStatus.textContent = "YELLOW — Caution";
        signalMessage.textContent = "Prepare to stop.";
    }
}

function renderQueue() {
    queueCount.textContent = vehicleQueue.length;
    nextVehicle.textContent = vehicleQueue.length > 0 ? vehicleQueue[0] : "None";
    queueStatus.textContent = vehicleQueue.length > 0 ? "Not empty" : "Empty";

    queueList.replaceChildren();

    if (vehicleQueue.length === 0) {
        const emptyState = document.createElement("div");
        emptyState.className = "empty-state";
        emptyState.textContent = "No vehicles are waiting. Add a vehicle to get started.";
        queueList.appendChild(emptyState);
        return;
    }

    vehicleQueue.forEach((vehicle, index) => {
        const item = document.createElement("div");
        item.className = "vehicle-item";

        const position = document.createElement("div");
        position.className = "vehicle-position";
        position.textContent = index + 1;

        const details = document.createElement("div");
        details.className = "vehicle-details";

        const name = document.createElement("strong");
        name.textContent = vehicle;

        const note = document.createElement("small");
        note.textContent = index === 0 ? "At the front of the queue" : "Waiting";

        details.append(name, note);
        item.append(position, details);

        if (index === 0) {
            const badge = document.createElement("span");
            badge.className = "front-badge";
            badge.textContent = "NEXT";
            item.appendChild(badge);
        }

        queueList.appendChild(item);
    });
}

// Enqueue: add a vehicle to the rear.
vehicleForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const vehicle = vehicleInput.value.trim();

    if (!vehicle) {
        showMessage("Please enter a vehicle number or name.", "error");
        return;
    }

    vehicleQueue.push(vehicle);
    vehicleInput.value = "";
    renderQueue();
    showMessage(`${vehicle} was added to the rear of the queue.`, "success-message");
    vehicleInput.focus();
});

// Dequeue: allow the front vehicle to pass only when the signal is green.
document.getElementById("greenButton").addEventListener("click", function () {
    signal = "GREEN";
    updateSignalDisplay();

    if (vehicleQueue.length === 0) {
        showMessage("The signal is green, but no vehicles are waiting.");
        return;
    }

    const passedVehicle = vehicleQueue.shift();
    renderQueue();
    showMessage(`${passedVehicle} passed the signal and was removed from the queue.`, "success-message");
});

document.getElementById("redButton").addEventListener("click", function () {
    signal = "RED";
    updateSignalDisplay();
    showMessage("The signal is red. Vehicles must wait.");
});

document.getElementById("clearButton").addEventListener("click", function () {
    if (vehicleQueue.length === 0) {
        showMessage("The queue is already empty.");
        return;
    }

    vehicleQueue.length = 0;
    renderQueue();
    showMessage("The waiting queue has been cleared.");
});

// Initial display.
updateSignalDisplay();
renderQueue();
