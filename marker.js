var bloodIcon = "icons/svg/blood.svg";
function updateToken(args, parentId){
    let tMaxHealth = args.actor.data.data.attributes.hp.max;
    let tCurrentHealth = args.actor.data.data.attributes.hp.value;

    toggleBloodiedMarker((tCurrentHealth < (tMaxHealth/2) && tCurrentHealth > 0 ), args, parentId);

    if(tCurrentHealth <= 0){
        setTokenDead(args);
    }    
}

function toggleBloodiedMarker(state, token, parentId){
    let effs = token.data.effects;
    if((state && !effs.includes(bloodIcon)) || (!state && effs.includes(bloodIcon))){
       token.toggleEffect(bloodIcon);
    }
}

function setTokenDead(token){
    token.data.overlayEffect = "icons/svg/skull.svg"
}

Hooks.on('updateToken',(arg, parentId)=> updateToken(arg, parentId));