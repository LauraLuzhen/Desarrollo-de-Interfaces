import * as signalR from "@microsoft/signalr";
import { GAME_HUB_URL } from "../const/Url";

export class Connection {
  private connection: signalR.HubConnection;

  constructor() {
    this.connection = new signalR.HubConnectionBuilder()
      .withUrl(GAME_HUB_URL)
      .withAutomaticReconnect()
      .build();
  }

  async start(): Promise<void> {
    if (this.connection.state === signalR.HubConnectionState.Disconnected) {
      await this.connection.start();
      console.log("✅ SignalR conectado");
    }
  }

  async stop(): Promise<void> {
    if (this.connection.state !== signalR.HubConnectionState.Disconnected) {
      await this.connection.stop();
      console.log("🔴 SignalR desconectado");
    }
  }

  invoke(method: string, ...args: any[]) {
    return this.connection.invoke(method, ...args);
  }

  on(event: string, callback: (...args: any[]) => void) {
    this.connection.on(event, callback);
  }

  off(event: string) {
    this.connection.off(event);
  }

  get rawConnection() {
    return this.connection;
  }
}
