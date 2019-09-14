var bloodIcon = "icons/svg/blood.svg";
function updateToken(args, changedData) {
    try{
        let a = changedData.actorData.data.attributes.hp.value;
    }
    catch(e){
        return;
    }
    let tMaxHealth = args.actor.data.data.attributes.hp.max;
    let tCurrentHealth = args.actor.data.data.attributes.hp.value;

    toggleBloodiedMarker((tCurrentHealth < (tMaxHealth / 2) && tCurrentHealth > 0), args);

    setTokenDead(args, tCurrentHealth > 0);
}

function toggleBloodiedMarker(state, token) {
    let effs = token.data.effects;
    if ((state && !effs.includes(bloodIcon)) || (!state && effs.includes(bloodIcon))) {
        token.toggleEffect(bloodIcon);
    }
}

function setTokenDead(token, alive) {
    if(!token.data.overlayEffect && alive == false){
        token.toggleOverlay(CONFIG.controlIcons.defeated);
    } else if (token.data.overlayEffect && alive == true){
        token.toggleOverlay(null);
    }
}

Hooks.on('updateToken', (arg, parentId, changedData) => updateToken(arg, changedData));