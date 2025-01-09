import './index.scss'

const AnimatedLetters = ({ letterClass, strArray, idx }) => {
  return (
    <span>
      {strArray.map((char, i) => (
        <span key={char + i} className={`${letterClass} _${i + idx}`}>
          {char}
        </span>
      ))}
    </span>
  )
}

export default AnimatedLetters




// This component is called AnimatedLetters and is used to animate or style each letter of a word or phrase individually.

// It imports styles from the 'index.scss' file for custom animations or styling.

// The component takes three inputs:
// 1. `letterClass`: A CSS class applied to each letter.
// 2. `strArray`: An array of letters (e.g., ['H', 'e', 'l', 'l', 'o']).
// 3. `idx`: A number used to make unique class names for each letter.

// Inside the component:
// - It wraps everything inside a single <span>.
// - It loops through the letters in `strArray` using the `.map()` function.
// - For each letter:
//   - It creates a <span> around the letter.
//   - Adds a unique `key` for React to manage changes efficiently (key = char + index).
//   - Assigns a dynamic CSS class, combining `letterClass` and an incremental number (e.g., "text-animate _5").

// Example output if `strArray` = ['H', 'e', 'l', 'l', 'o'] and `idx` = 10:
// <span>
//   <span class="text-animate _10">H</span>
//   <span class="text-animate _11">e</span>
//   <span class="text-animate _12">l</span>
//   <span class="text-animate _13">l</span>
//   <span class="text-animate _14">o</span>
// </span>

// This component is great for creating animations like:
// - Letters fading in one by one.
// - Letters bouncing, sliding, or rotating.

// At the end, the component is exported so it can be used in other files.
// Example usage:
// <AnimatedLetters
//   letterClass="text-animate"
//   strArray={['H', 'e', 'l', 'l', 'o']}
//   idx={5}
// />

// This would result in unique classes like "text-animate _5", "text-animate _6", etc.,
// which can be styled in 'index.scss' for animations or effects.
