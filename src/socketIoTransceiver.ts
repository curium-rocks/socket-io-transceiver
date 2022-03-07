import {ICommand, ICompoundDataEmitter, IDataEmitter, IDataEvent, IDataEventListener, IDataEventListenerFunc, IDisposable, IExecutionResult, IFormatSettings, ISettings, IStatusChangeListener, IStatusChangeListenerFunc, IStatusEvent} from '@curium.rocks/data-emitter-base';

/**
 * A class that can be used to send and receive data over a Socket.IO connection.
 */
export class SocketIOTransceiver implements ICompoundDataEmitter {
    id: string;
    name: string;
    description: string;

    /**
     * 
     * @param {ISettings} settings 
     */
    constructor(settings: ISettings) {
        this.id = settings.id;
        this.name = settings.name;
        this.description = settings.description;
    }

    /**
     * 
     * @param {string} id 
     */
    getIndividualEmitter(id: string): IDataEmitter {
        throw new Error('Method not implemented.');
    }
    
    /**
     * 
     */
    getEmitters(): IDataEmitter[] {
        throw new Error('Method not implemented.');
    }
    
    /**
     * 
     * @param {IDataEventListener | IDataEventListenerFunc} listener 
     */
    onData(listener: IDataEventListener | IDataEventListenerFunc): IDisposable {
        throw new Error('Method not implemented.');
    }
    
    /**
     * 
     * @param {IStatusChangeListener | IStatusChangeListenerFunc} listener 
     */
    onStatus(listener: IStatusChangeListener | IStatusChangeListenerFunc): IDisposable {
        throw new Error('Method not implemented.');
    }
    
    /**
     * 
     * @param {ISettings} settings 
     */
    applySettings(settings: ISettings): Promise<IExecutionResult> {
        throw new Error('Method not implemented.');
    }
    
    /**
     * 
     * @param {ICommand} command 
     */
    sendCommand(command: ICommand): Promise<IExecutionResult> {
        throw new Error('Method not implemented.');
    }
    
    /**
     * 
     */
    probeStatus(): Promise<IStatusEvent> {
        throw new Error('Method not implemented.');
    }
    
    /**
     * 
     */
    probeCurrentData(): Promise<IDataEvent> {
        throw new Error('Method not implemented.');
    }
    
    /**
     * 
     */
    toJSON(): Record<string, unknown> {
        throw new Error('Method not implemented.');
    }

    /**
     * 
     * @param {IFormatSettings} settings 
     */
    serializeState(settings: IFormatSettings): Promise<string> {
        throw new Error('Method not implemented.');
    }

}