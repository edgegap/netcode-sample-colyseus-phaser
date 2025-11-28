export const BACKEND_URL = (window.location.href.indexOf("localhost") === -1)
    ? `${window.location.protocol.replace("http", "ws")}//${window.location.hostname}:${parseInt(process.env.ARBITRIUM_PORT_GAMEPORT_EXTERNAL)}`
    : `ws://localhost:${parseInt(process.env.ARBITRIUM_PORT_GAMEPORT_EXTERNAL)}`

export const BACKEND_HTTP_URL = BACKEND_URL.replace("ws", "http");