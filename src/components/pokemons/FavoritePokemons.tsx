import { createSignal, For, onMount } from "solid-js";
import type { FavoritePokemon } from "@interfaces/favorite-pokemon";
import { FavoritePokemonCard } from "./FavoritePokemonCard";

const getLocalStoragePokemons = (): FavoritePokemon[] => {
    const favorites = JSON.parse(localStorage.getItem("favoritesPokemon") || "[]");
    return favorites;
}

export const FavoritePokemons = () => {
    const [favoritePokemons, setFavoritePokemons] = createSignal<FavoritePokemon[]>(getLocalStoragePokemons());

    // onMount(() => {
    //     const favorites = getLocalStoragePokemons();
    //     setFavoritePokemons(favorites);
    // });

    return (
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <For each={favoritePokemons()}>{(pokemon) => (
                <FavoritePokemonCard pokemon={pokemon} />
            )}</For>
        </div>
    );
}