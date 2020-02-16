export default class YahooWeather {
  constructor(settings) {
    this.settings = settings;
    this.units = settings.units;
  }

  // eslint-disable-next-line class-methods-use-this
  get attribution() {
    return {
      text: 'Powered by Yahoo!',
      link: 'https://www.yahoo.com/?ilc=401',
    };
  }

  static hmacsha1(k, d, _p, _z) {
    if (!_p) {
      // eslint-disable-next-line no-param-reassign
      _p = '=';
    }
    if (!_z) {
      // eslint-disable-next-line no-param-reassign
      _z = 8;
    }
    // eslint-disable-next-line no-underscore-dangle, no-shadow
    function _f(t, b, c, d) {
      if (t < 20) {
        // eslint-disable-next-line no-bitwise
        return (b & c) | (~b & d);
      }
      if (t < 40) {
        // eslint-disable-next-line no-bitwise
        return b ^ c ^ d;
      }
      if (t < 60) {
        // eslint-disable-next-line no-bitwise
        return (b & c) | (b & d) | (c & d);
      }
      // eslint-disable-next-line no-bitwise
      return b ^ c ^ d;
    }
    // eslint-disable-next-line no-underscore-dangle
    function _k(t) {
      // eslint-disable-next-line no-nested-ternary
      return t < 20 ? 1518500249 : t < 40 ? 1859775393 : t < 60 ? -1894007588 : -899497514;
    }
    // eslint-disable-next-line no-underscore-dangle
    function _s(x, y) {
      // eslint-disable-next-line no-bitwise
      const l = (x & 0xffff) + (y & 0xffff);
      // eslint-disable-next-line no-bitwise
      const m = (x >> 16) + (y >> 16) + (l >> 16);
      // eslint-disable-next-line no-bitwise
      return (m << 16) | (l & 0xffff);
    }
    // eslint-disable-next-line no-underscore-dangle
    function _r(n, c) {
      // eslint-disable-next-line no-bitwise
      return (n << c) | (n >>> (32 - c));
    }
    // eslint-disable-next-line no-underscore-dangle
    function _c(x, l) {
      // eslint-disable-next-line no-bitwise, no-param-reassign
      x[l >> 5] |= 0x80 << (24 - (l % 32));
      // eslint-disable-next-line no-bitwise, no-param-reassign
      x[(((l + 64) >> 9) << 4) + 15] = l;
      const w = [80];
      let a = 1732584193;
      let b = -271733879;
      let c = -1732584194;
      // eslint-disable-next-line no-shadow
      let d = 271733878;
      let e = -1009589776;
      for (let i = 0; i < x.length; i += 16) {
        const o = a;
        const p = b;
        const q = c;
        const r = d;
        const s = e;
        // eslint-disable-next-line no-plusplus
        for (let j = 0; j < 80; j++) {
          if (j < 16) {
            w[j] = x[i + j];
          } else {
            // eslint-disable-next-line no-bitwise
            w[j] = _r(w[j - 3] ^ w[j - 8] ^ w[j - 14] ^ w[j - 16], 1);
          }
          const t = _s(_s(_r(a, 5), _f(j, b, c, d)), _s(_s(e, w[j]), _k(j)));
          e = d;
          d = c;
          c = _r(b, 30);
          b = a;
          a = t;
        }
        a = _s(a, o);
        b = _s(b, p);
        c = _s(c, q);
        d = _s(d, r);
        e = _s(e, s);
      }
      return [a, b, c, d, e];
    }
    // eslint-disable-next-line no-underscore-dangle
    function _b(s) {
      const b = [];
      // eslint-disable-next-line no-bitwise
      const m = (1 << _z) - 1;
      for (let i = 0; i < s.length * _z; i += _z) {
        // eslint-disable-next-line no-bitwise
        b[i >> 5] |= (s.charCodeAt(i / 8) & m) << (32 - _z - (i % 32));
      }
      return b;
    }
    // eslint-disable-next-line no-underscore-dangle, no-shadow
    function _h(k, d) {
      let b = _b(k);
      if (b.length > 16) {
        b = _c(b, k.length * _z);
      }
      const p = [16];
      const o = [16];
      // eslint-disable-next-line no-plusplus
      for (let i = 0; i < 16; i++) {
        // eslint-disable-next-line no-bitwise
        p[i] = b[i] ^ 0x36363636;
        // eslint-disable-next-line no-bitwise
        o[i] = b[i] ^ 0x5c5c5c5c;
      }
      const h = _c(p.concat(_b(d)), 512 + d.length * _z);
      return _c(o.concat(h), 512 + 160);
    }
    // eslint-disable-next-line no-underscore-dangle
    function _n(b) {
      const t = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
      let s = '';
      for (let i = 0; i < b.length * 4; i += 3) {
        const r =
          // eslint-disable-next-line no-bitwise
          (((b[i >> 2] >> (8 * (3 - (i % 4)))) & 0xff) << 16) |
          // eslint-disable-next-line no-bitwise
          (((b[(i + 1) >> 2] >> (8 * (3 - ((i + 1) % 4)))) & 0xff) << 8) |
          // eslint-disable-next-line no-bitwise
          ((b[(i + 2) >> 2] >> (8 * (3 - ((i + 2) % 4)))) & 0xff);
        // eslint-disable-next-line no-plusplus
        for (let j = 0; j < 4; j++) {
          if (i * 8 + j * 6 > b.length * 32) {
            s += _p;
          } else {
            // eslint-disable-next-line no-bitwise
            s += t.charAt((r >> (6 * (3 - j))) & 0x3f);
          }
        }
      }
      return s;
    }
    // eslint-disable-next-line no-underscore-dangle, no-shadow
    function _x(k, d) {
      return _n(_h(k, d));
    }
    return _x(k, d);
  }

  getAuthHeader(url, params, key, secret) {
    const oauth = {
      oauth_consumer_key: key,
      oauth_nonce: Math.random()
        .toString(36)
        .substring(2),
      oauth_signature_method: 'HMAC-SHA1',
      oauth_timestamp: parseInt(new Date().getTime() / 1000, 10).toString(),
      oauth_version: '1.0',
    };

    // eslint-disable-next-line prefer-object-spread
    const merged = Object.assign(Object.assign({}, params), oauth);
    const mergedArr = Object.keys(merged)
      .sort()
      .map(k => {
        return [`${k}=${encodeURIComponent(merged[k])}`];
      });

    oauth.oauth_signature = this.hmacsha1(
      `${encodeURIComponent(secret)}&`,
      `GET&${encodeURIComponent(url)}&${encodeURIComponent(mergedArr.join('&'))}`
    );
    return `OAuth ${Object.keys(oauth)
      .map(k => {
        return [`${k}="${oauth[k]}"`];
      })
      .join(',')}`;
  }

  load(location) {
    return new Promise((resolve, reject) => {
      const url = 'https://weather-ydn-yql.media.yahoo.com/forecastrss';
      const query = { location, format: 'json', u: this.units };
      const queryString = Object.keys(query)
        .map(x => {
          return `${x}=${query[x]}`;
        })
        .join('&');

      fetch(`${url}?${queryString}`, {
        headers: {
          Authorization: this.getAuthHeader(
            url,
            query,
            this.settings['provider-client-id'],
            this.settings['provider-key']
          ),
          'X-Yahoo-App-Id': this.settings['provider-app-id'],
        },
      })
        .then(response => {
          return response.json();
        })
        .then(response => {
          if (typeof response.location.city === 'undefined') {
            return reject(new Error('No result returned'));
          }
          return resolve({
            success: true,
            title: 'xxx',
            city: response.location.city,
            current: {
              temp: response.current_observation.condition.temperature,
              code: `wi-yahoo-${response.current_observation.condition.code}`,
            },
            forecast: response.forecasts.slice(1, 4).map(f => ({
              code: `wi-yahoo-${f.code}`,
              date: f.date * 1000,
              high: f.high,
              low: f.low,
            })),
          });
        });
    });
  }
}
