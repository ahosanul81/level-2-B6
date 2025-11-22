// abstraction using interfce

// interface MediaPlayer {
//   play(): void;
//   pause(): void;
//   stop(): void;
// }
// class MusicPlayer implements MediaPlayer {
//   play(): void {
//     console.log("playing music........");
//   }
//   pause(): void {
//     console.log(" music pasused........");
//   }
//   stop(): void {
//     console.log(" music stopped........");
//   }
// }

// abstraction using abstract class

abstract class MediaPlayer {
  abstract play(): void;
  abstract pause(): void;
  abstract stop(): void;
}

class MyPlayer extends MediaPlayer {
  play(): void {
    console.log("playing music........");
  }
  pause(): void {
    console.log(" music pasused........");
  }
  stop(): void {
    console.log(" music stopped........");
  }
}
const myplayer1 = new MyPlayer();
myplayer1.play();
