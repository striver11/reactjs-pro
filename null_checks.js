// In JavaScript, “null checks” are a way to see if a variable has a meaningful value before using it—so you don’t run into surprises like TypeError: cannot read property of null.

// Here are some common, safe ways to do that:

// ✅ 1. Basic if-check
// js
// if (myVar !== null) {
//   // It's not null!
// }
// You can also check for both null and undefined:

// js
// if (myVar != null) {
//   // This covers both: null and undefined
// }
// ✅ 2. Optional chaining (super handy!)
// js
// let name = user?.profile?.name;
// This avoids throwing an error if any part is null or undefined.

// ✅ 3. Nullish coalescing operator (??)
// js
// let result = myVar ?? "Default";
// This will assign "Default" only if myVar is null or undefined.

// ✅ 4. Truthy check
// js
// if (myVar) {
//   // Only runs if myVar is NOT: null, undefined, 0, false, NaN, or ""
// }
// ⚠️ Be careful: this also filters out other "falsy" values like 0 or "", which might be valid in your case.

// If you're checking for exactly null, go with myVar === null. If you want to allow anything meaningful and rule out null/undefined, then myVar != null is clean and expressive.
