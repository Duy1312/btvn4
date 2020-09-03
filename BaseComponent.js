class BaseComponent extends HTMLElement {
    props;
    state;
    constructor() {
        super();
        this._shadowRoot = this.attachShadow({mode: 'open'});
        this.props ={};
        this.state = {};
    }


connectedCallback(){
    this.render();
    this.componentDidMount();

}
attributeChangedCallback(name, oldValue, newValue){
    this.props[name] = newValue;
    this.render();
    this.componentDidUpdate();
}
disconnectedCallback(){
    this.componentWillUnmout();

}

setState(newState){
    this.state = newState;
    this.render();
    this.componentDidUpdate();
}
/**
 * In html ra ngoài màn hình
 * Gán sự kiện cho các thẻ bên trong component
 */
Render() {

}
/**
 * được gọi khi component đc sinh ra
 * gọi 1 lần duy nhất
 */
componentDidMount(){

}
/**
 * đc gọi sau khi props hoặc state thau đổi, sau khi render
 */
componentDidUpdate(){

}

/**
 * đc gọi trc khi component biến mất
 */
componentWillUnmout(){

}
}

export {BaseComponent};