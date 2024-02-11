import { Container, Divider, SearchTextbox, Stack } from "@create-figma-plugin/ui"
import { h } from "preact"

import { SearchResult } from "../components/search-result/SearchResult";

import "!../styles/global.css";
import "!../styles/search.css";

export function Search() {
    return (
        <div className="container">
            <div id="nav">
                <SearchTextbox placeholder="Search" value=""></SearchTextbox>
            </div>
            <Container space="medium" id="results">
                <Stack space="medium">
                    <SearchResult
                        title="The Water Outlaws"
                        author="S.L. Huang"
                        description="Inspired by a classic of martial arts literature, S. L. Huang's The Water Outlaws
                        are bandits of devastating ruthlessness, unseemly femininity, dangerous philosophies, and ungovernable gender
                        who are ready to make history—or tear it apart."
                        cover="https://books.google.com/books/publisher/content?id=rk-BEAAAQBAJ&pg=PA1&img=1&zoom=3&hl=en&bul=1&sig=ACfU3U3xnh60cAv8F5PirpUAznM9EgdYfw"
                    ></SearchResult>
                    <SearchResult
                        title="A True Account"
                        author="Katherine Howe"
                        description="From New York Times bestselling author Katherine Howe comes a daring first-hand
                        account of one young woman's unbelievable adventure as one of the most terrifying sea rovers of all time.In
                        Boston, as the Golden Age of Piracy comes to a bloody close, Hannah Masury – bound out to service at a
                        waterfront inn since childhood – is ready to take her life into her own hands. When a man is hanged for piracy
                        in the town square and whispers of a treasure in the Caribbean spread, Hannah is forced to flee for her life,
                        disguising herself as a cabin boy in the pitiless crew of the notorious pirate Edward &quot;Ned&quot; Low. To earn the
                        freedom to choose a path for herself, Hannah must hunt down the treasure and change the tides.Meanwhile,
                        professor Marian Beresford pieces Hannah’s stor...
                        Source: Publisher"
                        cover="https://books.google.com/books/publisher/content?id=C82oEAAAQBAJ&pg=PP1&img=1&zoom=3&hl=en&bul=1&sig=ACfU3U26US9i66KhRz0h4csoQ556iue1pA"
                    ></SearchResult>
                    <SearchResult
                        title="Ink Blood Sister Scribe"
                        author="Emma Törzs"
                        description="In this spellbinding debut novel, two estranged half-sisters tasked with guarding
                        their family’s library of magical books must work together to unravel a deadly secret at the heart of their
                        collection—a tale of familial loyalty and betrayal, and the pursuit of magic and power.
                        For generations, the Kalotay family has guarded a collection of ancient and rare books. Books that let a person
                        walk through walls or manipulate the elements—books of magic that half-sisters Joanna and Esther have been
                        raised to revere and protect."
                        cover="https://books.google.com/books/publisher/content?id=ACqMEAAAQBAJ&pg=PP1&img=1&zoom=3&hl=en&bul=1&sig=ACfU3U3Z1MXpGLL2dVX4SJgRlATXFJtqyg"
                    ></SearchResult>
                </Stack>
            </Container>
        </div>
    )
}
