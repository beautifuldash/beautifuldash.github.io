const header = React.createClass({
    propTypes: {
        name: React.PropTypes.string.isRequired, // name of link
        url: React.PropTypes.string.isRequired // url of link
    },

    render: function() {
        return React.DOM.li(null,
            React.DOM.a({
                href: this.props.url,
                className: 'header_link'
            }, this.props.name)
        );
    }
});

ReactDOM.render(
    React.DOM.div({
        className: 'container'
    }, React.DOM.div({
        className: 'header_body'
    }, React.DOM.a({
        className: 'logo',
        href: '/'
    }, React.DOM.img({
        src: './img/logo/gdps.png'
    }), React.DOM.p({
        className: 'text'
    }, 'Beautiful DashPS')), React.DOM.div({
        className: 'hamburger',
        id: 'hamburger'
    }, React.DOM.span(null)), React.DOM.nav({
        className: 'header_menu',
        id: 'menu'
    }, React.DOM.ul({
        className: 'header_list'
    }, 
        React.createElement(header, {
            name: 'Главная',
            url: './index.html'
        }),
        React.createElement(header, {
            name: 'Демонлист',
            url: './dl.html'
        }),
        React.createElement(header, {
            name: 'Лидеры',
            url: './top.html'
        }),
        React.createElement(header, {
            name: 'Администрация',
            url: './admins.html'
        }),
    )))),
    document.getElementById('header')
);