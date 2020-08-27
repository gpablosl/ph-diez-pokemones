//me averguenza lo largo que termino siendo esto
//dugtrio
const pokemonDugtrio = {
    sprite: document.getElementById('pokemon-imagedugtrio'),
    name: document.getElementById('pokemon-dugtrio')
    }
const GetPokemonDugtrio = async _=>{
    const url = 'https://pokeapi.co/api/v2/pokemon/dugtrio';
    console.log(`URL DUGTRIO= ${url}`);
    const data = await fetch(url);
    const dataJson = await data.json();
    const {sprites, name} = dataJson;
    pokemonDugtrio.sprite.src = await sprites.front_default;
    pokemonDugtrio.name.innerHTML = `Name: ${name}`;
}

//psyduck
const pokemonPsyduck = {
    sprite: document.getElementById('pokemon-imagepsyduck'),
    name: document.getElementById('pokemon-psyduck'),
    }
const GetPokemonPsyduck = async _=>{
    const url = 'https://pokeapi.co/api/v2/pokemon/psyduck';
    console.log(`URL PSYDUCK= ${url}`);
    const data = await fetch(url);
    const dataJson = await data.json();
    const {sprites, name} = dataJson;
    pokemonPsyduck.sprite.src = await sprites.front_default;
    pokemonPsyduck.name.innerHTML =`Name: ${name}`;
    }

//gastly
const pokemongastly = {
    sprite: document.getElementById('pokemon-imagegastly'),
    name: document.getElementById('pokemon-gastly'),
    }
const GetPokemongastly = async _=>{
    const url = 'https://pokeapi.co/api/v2/pokemon/gastly';
    console.log(`URL GASTLY= ${url}`);
    const data = await fetch(url);
    const dataJson = await data.json();
    const {sprites, name} = dataJson;
    pokemongastly.sprite.src = await sprites.front_default;
    pokemongastly.name.innerHTML = `Name: ${name}`;
    }

//magneton
const pokemonmagneton = {
    sprite: document.getElementById('pokemon-image-magneton'),
    name: document.getElementById('pokemon-magneton'),
    }
const GetPokemonmagneton = async _=>{
    const url = 'https://pokeapi.co/api/v2/pokemon/magneton';
    console.log(`URL MAGNETON= ${url}`);
    const data = await fetch(url);
    const dataJson = await data.json();
    const {sprites, name} = dataJson;
    pokemonmagneton.sprite.src = await sprites.front_default;
    pokemonmagneton.name.innerHTML = `Name: ${name}`;
    }

//aggron
const pokemonaggron = {
    sprite: document.getElementById('pokemon-image-aggron'),
    name: document.getElementById('pokemon-aggron'),
    }
const GetPokemonaggron = async _=>{
    const url = 'https://pokeapi.co/api/v2/pokemon/aggron';
    console.log(`URL AGGRON= ${url}`);
    const data = await fetch(url);
    const dataJson = await data.json();
    const {sprites, name} = dataJson;
    pokemonaggron.sprite.src = await sprites.front_default;
    pokemonaggron.name.innerHTML = `Name: ${name}`;
    }

//gengar
const pokemongengar={
    sprite: document.getElementById('pokemon-image-gengar'),
    name: document.getElementById('pokemon-gengar')
}
const GetPokemongengar=async _=>{
    const url='https://pokeapi.co/api/v2/pokemon/gengar';
    console.log(`URL GENGAR= ${url}`);
    const data=await fetch(url);
    const dataJson=await data.json();
    const{name,sprites}=dataJson;
    pokemongengar.sprite.src=await sprites.front_default;
    pokemongengar.name.innerHTML= `Name: ${name}`;
}

//arcticuno
const pokemonarticuno={
    sprite:document.getElementById('pokemon-image-articuno'),
    name:document.getElementById('pokemon-articuno')
}
const GetPokemonarticuno=async _=>{
    const url='https://pokeapi.co/api/v2/pokemon/articuno';
    console.log(`URL ARTICUNO= ${url}`);
    const data= await fetch(url);
    const dataJson=await data.json();
    const{name,sprites}=dataJson;
    pokemonarticuno.sprite.src=await sprites.front_default;
    pokemonarticuno.name.innerHTML= `Name: ${name}`;
}

//unown
const pokemonunown={
    sprite:document.getElementById('pokemon-image-unown'),
    name:document.getElementById('pokemon-unown')
}
const GetPokemonunown=async _=>{
    const url='https://pokeapi.co/api/v2/pokemon/unown';
    console.log(`URL UNOWN= ${url}`);
    const data= await fetch(url);
    const dataJson=await data.json();
    const{name,sprites}=dataJson;
    pokemonunown.sprite.src=await sprites.front_default;
    pokemonunown.name.innerHTML= `Name: ${name}`;
}

//poliwhirl
const pokemonpoliwhirl={
    sprite:document.getElementById('pokemon-image-poliwhirl'),
    name:document.getElementById('pokemon-poliwhirl')
}
const GetPokemonpoliwhirl=async _=>{
    const url='https://pokeapi.co/api/v2/pokemon/poliwhirl';
    console.log(`URL POLIWHIRL= ${url}`);
    const data= await fetch(url);
    const dataJson=await data.json();
    const{name,sprites}=dataJson;
    pokemonpoliwhirl.sprite.src=await sprites.front_default;
    pokemonpoliwhirl.name.innerHTML= `Name: ${name}`;
}

//regirock
const pokemonregirock={
    sprite:document.getElementById('pokemon-image-regirock'),
    name:document.getElementById('pokemon-regirock')
}
const GetPokemonregirock=async _=>{
    const url='https://pokeapi.co/api/v2/pokemon/regirock';
    console.log(`URL REGIROCK= ${url}`);
    const data= await fetch(url);
    const dataJson=await data.json();
    const{name,sprites}=dataJson;
    pokemonregirock.sprite.src=await sprites.front_default;
    pokemonregirock.name.innerHTML= `Name: ${name}`;
}

GetPokemonDugtrio();
GetPokemonPsyduck();
GetPokemongastly();
GetPokemonmagneton();
GetPokemonaggron();
GetPokemongengar();
GetPokemonarticuno();
GetPokemonunown();
GetPokemonpoliwhirl();
GetPokemonregirock();