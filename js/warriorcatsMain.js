const advancedSettingsButton = document.getElementById("adv");
const advancedHiddenSettings = document.getElementById("advancedHidden");
let state = false;

advancedSettingsButton.onclick = function(){
    state = !state;

    if(state){advancedHiddenSettings.style.display = "inline";}
    else{advancedHiddenSettings.style.display = "none";}
}

const lockPrefix = document.getElementById("lockPrefix");
let lockPrefixState = false;

lockPrefix.onclick = function(){
    lockPrefixState = !lockPrefixState;
    
    if(lockPrefixState){lockPrefix.innerHTML = "> Lock Prefix (Enabled)";}
    else{lockPrefix.innerHTML = "> Lock Prefix (Disabled)";}
}

const lockSuffix = document.getElementById("lockSuffix");
let lockSuffixState = false;

lockSuffix.onclick = function(){
    lockSuffixState = !lockSuffixState;

    if(lockSuffixState){lockSuffix.innerHTML = "> Lock Suffix (Enabled)"}
    else{lockSuffix.innerHTML = "> Lock Suffix (Disabled)"}
}

const tribeNameButton = document.getElementById("generateTribeNames");

tribeNameButton.onclick = function(){
    alert("This feature is coming soon.");
}

// GENERATOR GOES HERE LOL
function pickPrefix(){
    let prefixLength = prefix.length;
    let random = Math.floor(Math.random() * prefixLength);

    return random;
}

function pickSuffix(){
    let suffixLength = suffix.length;
    let random = Math.floor(Math.random() * suffixLength);
    
    return random;
}

const gen = document.getElementById("gen");
const field = document.getElementById("field");

let prefixname = "Fire";
let suffixname = "Star";

gen.onclick = function(){
    if(lockPrefixState === false){prefixname = prefix[pickPrefix()]};
    if(lockSuffixState === false){suffixname = suffix[pickSuffix()]};
    field.innerHTML = prefixname + suffixname;
}