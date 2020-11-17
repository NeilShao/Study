function defineObject(obj, key, val, cb) {
    Object.defineProperty(obj, key, {
        enumerable: true,
        configurable: true,
        get: () => {
            return val;
        },
        set: (newVal) => {
            val = newVal;
            cb();
        },
    });
}

function observe(value, cb) {
    Object.keys(value).forEach((key) =>
        defineObject(value, key, value[key], cb)
    );
}

function _proxy(data) {
    const that = this;
    Object.keys(data).forEach((key) => {
        Object.defineProperty(that, key, {
            enumerable: true,
            configurable: true,
            get: function proxyGetter() {
                return that._data[key];
            },
            set: function proxySetter(val) {
                that._data[key] = val;
            },
        });
    });
}

class Vue {
    constructor(options) {
        this._data = options.data;
        _proxy.call(this, options.data)
        observe(this._data, options.render);
    }
}

let app = new Vue({
    el: "#app",
    data: {
        text: "text",
        text2: "text2",
    },
    render() {
        console.log("render");
    },
});

console.log(app);
app.text = "text3";
console.log(app);
