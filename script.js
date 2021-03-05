let main = document.getElementById('main');

        fetch('https://pokeapi.co/api/v2/pokemon')
            .then((respuesta) => respuesta.json())
            .then((respuesta) => {
                let pokemones = respuesta.results;
                for (let i = 0; i < 20; i++) {
                    fetch(pokemones[i].url)
                        .then((pokemon) => pokemon.json())
                        .then((pokemon) => {
                            console.log(pokemon);
                            let article = '';
                            article += '<article>';
                            article += '<h1>'+pokemon.name+'</h1>';
                            article += '<img src='+pokemon.sprites.front_default+'>';

                            pokemon.types.forEach(type => {
                                article += '<p>Type: ' + type.type.name + '</p>';
                            });

                            article += '<p>Base experience:'+pokemon.base_experience+'</p>';

                            article += '</article>';
                            main.innerHTML += article;
                        });
                }
            });