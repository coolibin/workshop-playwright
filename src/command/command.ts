interface ICommand {
    execute(): void
}

class Invoker {
    private commands: { [id: string]: ICommand }

    constructor() {
        this.commands = {}
    }

    register(id: string, command: ICommand) {
        this.commands[id] = command
    }

    execute(id: string) {
        if (id in this.commands) {
            this.commands[id].execute()
        } else {
            console.log(`Command ${id} not found`)
        }
    }
}

class Receiver {
    runCommand1() {
        console.log('Command 1 executed')
    }

    runCommand2() {
        console.log('Command 2 executed')
    }
}

class Command1 implements ICommand {
    private receiver: Receiver

    constructor(receiver: Receiver) {
        this.receiver = receiver
    }

    execute() {
        this.receiver.runCommand1()
    }
}

class Command2 implements ICommand {
    private receiver: Receiver

    constructor(receiver: Receiver) {
        this.receiver = receiver
    }

    execute() {
        this.receiver.runCommand2()
    }
}

// The Client

const receiver = new Receiver()

const command1 = new Command1(receiver)
const command2 = new Command2(receiver)

const invoker = new Invoker()
invoker.register('1', command1)
invoker.register('2', command2)

invoker.execute('1')
invoker.execute('2')
invoker.execute('1')
invoker.execute('2')
