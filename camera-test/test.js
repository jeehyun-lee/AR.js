try {
  AFRAME.registerComponent("acccam", {
    init: function () {
      // var vx = 0;
      // var vy = 0;
      // var vz = 0;
      window.addEventListener(
        "devicemotion",
        (event) => {
          const { x: ax, y: ay, z: az } = event.acceleration;

          const interval = event.interval;
          // vx += acc.x.toFixed(1) * interval;
          // vy += acc.y.toFixed(1) * interval;
          // vz += acc.z.toFixed(1) * interval;

          this.el.object3D.position.x += (ax * interval ** 2) / 2;
          this.el.object3D.position.y += (ay * interval ** 2) / 2;
          this.el.object3D.position.z += (az * interval ** 2) / 2;

          document.getElementById(
            "debug"
          ).innerText = `${this.el.object3D.position.x.toFixed(
            5
          )} ${this.el.object3D.position.y.toFixed(
            5
          )} ${this.el.object3D.position.z.toFixed(5)}`;
          document.getElementById("debug2").innerText = interval;
          document.getElementById("debug3").innerText = `${ax.toFixed(
            5
          )} ${ay.toFixed(5)} ${az.toFixed(5)}`;
        },
        true
      );
    },
  });
} catch (error) {
  alert(error.message);
}
