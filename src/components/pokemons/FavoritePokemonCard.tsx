import { createSignal, Show } from "solid-js";
import type { FavoritePokemon } from "@interfaces/favorite-pokemon";

interface Props {
    pokemon: FavoritePokemon;
}

export const FavoritePokemonCard = (props: Props) => {

    const [isVisible, setIsVisible] = createSignal(true);

    const { pokemon } = props;

    const imageSrc = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`;

    const handleDelete = () => {
        const favorites = JSON.parse(localStorage.getItem("favoritesPokemon") || "[]");
        const updatedFavorites = favorites.filter((fav: FavoritePokemon) => fav.id !== pokemon.id);
        localStorage.setItem("favoritesPokemon", JSON.stringify(updatedFavorites));
        setIsVisible(false);
    }

    return (
        <Show when={isVisible()}>
            <div class="flex flex-col justify-center items-center">
                <a href={`/pokemons/${pokemon.name}`}>
                    <img src={ imageSrc } alt={pokemon.name} width="96" height="96" style={`view-transition-name: pokemon-image-${pokemon.name}`} />
                    <p class="capitalize">#{pokemon.id} - {pokemon.name}</p>
                </a>
                <button class="text-red-400 cursor-pointer hover:text-red-600" onClick={handleDelete}>
                    Borrar
                </button>
            </div>
        </Show>
    )
}