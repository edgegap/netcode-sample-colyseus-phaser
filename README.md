# Phaser: Real-time Multiplayer with Colyseus

Full source-code for the step-by-step tutorial on how to use Phaser + Colyseus together.

- [See step-by-step Tutorial](https://colyseus.io/learn/examples/phaser/)
- [See Colyseus documentation](https://docs.colyseus.io/)

## How to host with Edgegap
- from root: `docker build . -t registry.edgegap.com/[PROJECT]/[IMAGE]:[TAG]`
- push to Edgegap repository
- create app version:
    - 1GiB memory
    - 1 vCPU
    - Port mapping:
        - clientport: 80 HTTP
        - gameport: 7777 WS

## License

- Source-code is licensed under MIT License.
- The [assets](https://www.kenney.nl/assets/pixel-shmup) are licensed under [CC0 1.0 Universal](https://creativecommons.org/publicdomain/zero/1.0/). 
