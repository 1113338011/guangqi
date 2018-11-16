export const whichTransitionEvent = function () {
    let t
    let el = document.createElement('surface')
    let transitions = {
        'transition':'transitionend',
        'OTransition':'oTransitionEnd',
        'MozTransition':'transitionend',
        'WebkitTransition':'webkitTransitionEnd'
    }
    for (t in transitions) {
        if( el.style[t] !== undefined ){
            return transitions[t]
        }
    }
}

export const whichAnimationEvent = function () {
    let t
    let el = document.createElement('surface')
    let animations = {
        'animation': 'animationend',
        'OAnimation': 'oAnimationEnd',
        'MozAnimation': 'animationend',
        'WebkitAnimation': 'webkitAnimationEnd'
    }
    for (t in animations) {
        if( el.style[t] !== undefined ){
            return animations[t]
        }
    }
}

export const random = function (min, max) {
    return Math.floor(Math.random() * (max - min)) + min
}