angular.module("MyFirstApp",[])
    .controller("FirstController", ["$scope",function(m){
        m.nombre="Mario";
        m.nuevoComentario={};
        m.comentarios=[
            {
                comentario: "Buen tutorial",
                username: "Jean Doe"
            },
            {
                comentario: "Retos Aceptables",
                username: "Abdail Kudhai"
            }
        ];
        m.agregarComentario=function(){
            m.comentarios.push(m.nuevoComentario);
            m.nuevoComentario={};
        }
    }]);