function isIos() {
    if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
        // true for mobile device
        return true;
    }
    return false;
}


window.onload = () => {
    let testEntitiesAdded = false;
    alert('If testing the lat/lon manual input on a mobile device, please turn off your GPS to avoid the real location being detected.');
    const el = document.querySelector("[gps-new-camera]");
    el.addEventListener("gps-camera-update-position", e => {
        document.querySelector("#lat").value = e.detail.position.latitude
        document.querySelector("#lon").value = e.detail.position.longitude
        if (!testEntitiesAdded) {
            alert(`Got first GPS position: lon ${e.detail.position.longitude} lat ${e.detail.position.latitude}`);
            // Add four boxes to the north (red), south (yellow), west (blue)
            // and east (red) of the initial GPS position
            const properties = [{
                color: 'red',
                lat: 37.297055,
                lon: 127.151375
            }, {
                color: 'yellow',
                lat: 37.297069,
                lon: 127.151550
            }, {
                color: 'blue',
                lat: 37.296911,
                lon: 127.151557
            }, {
                color: 'green',
                lat: 37.296917,
                lon: 127.151809
            }];
            for (const prop of properties) {
                const entity = document.createElement("a-box");
                entity.setAttribute("scale", {
                    x: 1,
                    y: 1,
                    z: 1
                });
                entity.setAttribute('material', { color: prop.color });
                entity.setAttribute('gps-new-entity-place', {
                    latitude: prop.lat,
                    longitude: prop.lon
                });

                document.querySelector("a-scene").appendChild(entity);
            }
            // try {
            //     if (isIos() && device.webkitCompassHeading) {
            //         const compass = THREE.MathUtils.degToRad(device.webkitCompassHeading);
            //         el.object3D.rotation.y += (Math.PI * 2 - compass);
            //     }
            // } catch (e) {
            //     alert(e.message)
            // }


            // window.addEventListener('deviceorientation', function (eventData) {
            //     try {
            //         if (isIos() && eventData.webkitCompassHeading) {
            //             const compass = THREE.MathUtils.degToRad(eventData.webkitCompassHeading);
            //             // this.document.getElementById('rot').innerText = JSON.stringify(el.object3D.rotation);
            //             // this.alert("deviceorientation " + compass);
            //             document.querySelector("a-scene").object3D.rotateY(10);
            //         }
            //     } catch (e) {
            //         alert(e.message)
            //     }
            // }, {once: true});

            setInterval(() => {
                el.object3D.rotateY(4);
            }, 1000)

            testEntitiesAdded = true;

        }
    });

    document.getElementById("go").addEventListener("click", e => {
        const lat = document.getElementById('lat').value;
        const lon = document.getElementById('lon').value;

        el.setAttribute('gps-new-camera', { simulateLatitude: lat, simulateLongitude: lon, positionMinAccuracy: minacc });
    });
};


