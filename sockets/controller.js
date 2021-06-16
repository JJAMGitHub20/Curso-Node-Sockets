


const socketController = (socket) => {
            console.log('Cliente conectado', socket.id );

            socket.on('disconnect', () => {
                console.log('Cliente desconectado', socket.id );
            });

            socket.on('enviar-mensaje', ( payload, callback ) => {
                
                const id = 123456;
                callback( id );
                //callback( { id, fecha: new Date().getTime() } );

                socket.broadcast.emit( 'enviar-mensaje', payload ); //Lo envia a todos los clientes sin incluir a quien lo envia
                //socket.emit( 'enviar-mensaje', payload ); Sólo lo envia al cliente que envia el mensaje
            });
}

module.exports = {
    socketController
}