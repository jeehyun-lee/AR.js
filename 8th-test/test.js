// try {
//     AFRAME.registerComponent('acccam', {
//         init: function () {
//             var vx = 0;
//             var vy = 0;
//             var vz = 0;
//             window.addEventListener('devicemotion', (event) => {
//                 var acc = event.acceleration;

//                 const interval = event.interval;
//                 vx += acc.x * interval;
//                 vy += acc.y * interval;
//                 vz += acc.z * interval;

//                 this.el.object3D.position.x += vx * interval;
//                 this.el.object3D.position.y += vy * interval;
//                 this.el.object3D.position.z += vz * interval;

//                 document.getElementById("debug").innerText = `${this.el.object3D.position.x.toFixed(5)} ${this.el.object3D.position.y.toFixed(5)} ${this.el.object3D.position.z.toFixed(5)}`
//                 document.getElementById("debug2").innerText = `${vx.toFixed(5)} ${vy.toFixed(5)} ${vz.toFixed(5)}`
//                 document.getElementById("debug3").innerText = `${acc.x.toFixed(5)} ${acc.y.toFixed(5)} ${acc.z.toFixed(5)}`
//             }, true);
//         }
//     })
// } catch (error) {
//     alert(error.message)
// }
