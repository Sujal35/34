/*! p5.js v0.10.2 October 14, 2019 */
(function(f) {
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = f();
    } else if (typeof define === 'function' && define.amd) {
      define([], f);
    } else {
      var g;
      if (typeof window !== 'undefined') {
        g = window;
      } else if (typeof global !== 'undefined') {
        g = global;
      } else if (typeof self !== 'undefined') {
        g = self;
      } else {
        g = this;
      }
      g.p5 = f();
    }
  })(function() {
    var define, module, exports;
    return (function() {
      function r(e, n, t) {
        function o(i, f) {
          if (!n[i]) {
            if (!e[i]) {
              var c = 'function' == typeof require && require;
              if (!f && c) return c(i, !0);
              if (u) return u(i, !0);
              var a = new Error("Cannot find module '" + i + "'");
              throw ((a.code = 'MODULE_NOT_FOUND'), a);
            }
            var p = (n[i] = { exports: {} });
            e[i][0].call(
              p.exports,
              function(r) {
                var n = e[i][1][r];
                return o(n || r);
              },
              p,
              p.exports,
              r,
              e,
              n,
              t
            );
          }
          return n[i].exports;
        }
        for (var u = 'function' == typeof require && require, i = 0; i < t.length; i++)
          o(t[i]);
        return o;
      }
      return r;
    })()(
      {
        1: [
          function(_dereq_, module, exports) {
            module.exports = {
              project: {
                name: 'p5',
                description:
                  '[![Build Status](https://travis-ci.org/processing/p5.js.svg?branch=master)](https://travis-ci.org/processing/p5.js) [![npm version](https://badge.fury.io/js/p5.svg)](https://www.npmjs.com/package/p5)',
                version: '0.10.2',
                url: 'https://github.com/processing/p5.js#readme'
              },
              files: {
                'src/color/color_conversion.js': {
                  name: 'src/color/color_conversion.js',
                  modules: {
                    'Color Conversion': 1
                  },
                  classes: {},
                  fors: {
                    p5: 1
                  },
                  namespaces: {}
                },
                'src/color/creating_reading.js': {
                  name: 'src/color/creating_reading.js',
                  modules: {
                    'Creating & Reading': 1
                  },
                  classes: {},
                  fors: {
                    p5: 1
                  },
                  namespaces: {}
                },
                'src/color/p5.Color.js': {
                  name: 'src/color/p5.Color.js',
                  modules: {},
                  classes: {
                    'p5.Color': 1
                  },
                  fors: {
                    p5: 1
                  },
                  namespaces: {}
                },
                'src/color/setting.js': {
                  name: 'src/color/setting.js',
                  modules: {
                    Setting: 1
                  },
                  classes: {},
                  fors: {
                    p5: 1
                  },
                  namespaces: {}
                },
                'src/core/shape/2d_primitives.js': {
                  name: 'src/core/shape/2d_primitives.js',
                  modules: {
                    '2D Primitives': 1
                  },
                  classes: {},
                  fors: {
                    p5: 1
                  },
                  namespaces: {}
                },
                'src/core/shape/attributes.js': {
                  name: 'src/core/shape/attributes.js',
                  modules: {
                    Attributes: 1
                  },
                  classes: {},
                  fors: {
                    p5: 1
                  },
                  namespaces: {}
                },
                'src/core/shape/curves.js': {
                  name: 'src/core/shape/curves.js',
                  modules: {
                    Curves: 1
                  },
                  classes: {},
                  fors: {
                    p5: 1
                  },
                  namespaces: {}
                },
                'src/core/shape/vertex.js': {
                  name: 'src/core/shape/vertex.js',
                  modules: {
                    Vertex: 1
                  },
                  classes: {},
                  fors: {
                    p5: 1
                  },
                  namespaces: {}
                },
                'src/core/constants.js': {
                  name: 'src/core/constants.js',
                  modules: {
                    Constants: 1
                  },
                  classes: {},
                  fors: {
                    p5: 1
                  },
                  namespaces: {}
                },
                'src/core/environment.js': {
                  name: 'src/core/environment.js',
                  modules: {
                    Environment: 1
                  },
                  classes: {},
                  fors: {
                    p5: 1
                  },
                  namespaces: {}
                },
                'src/core/error_helpers.js': {
                  name: 'src/core/error_helpers.js',
                  modules: {},
                  classes: {},
                  fors: {
                    p5: 1
                  },
                  namespaces: {}
                },
                'src/core/helpers.js': {
                  name: 'src/core/helpers.js',
                  modules: {},
                  classes: {},
                  fors: {},
                  namespaces: {}
                },
                'src/core/init.js': {
                  name: 'src/core/init.js',
                  modules: {},
                  classes: {},
                  fors: {},
                  namespaces: {}
                },
                'src/core/legacy.js': {
                  name: 'src/core/legacy.js',
                  modules: {},
                  classes: {},
                  fors: {
                    p5: 1
                  },
                  namespaces: {}
                },
                'src/core/main.js': {
                  name: 'src/core/main.js',
                  modules: {
                    Structure: 1
                  },
                  classes: {
                    p5: 1
                  },
                  fors: {
                    p5: 1
                  },
                  namespaces: {}
                },
                'src/core/p5.Element.js': {
                  name: 'src/core/p5.Element.js',
                  modules: {
                    DOM: 1
                  },
                  classes: {
                    'p5.Element': 1
                  },
                  fors: {
                    'p5.Element': 1
                  },
                  namespaces: {}
                },
                'src/core/p5.Graphics.js': {
                  name: 'src/core/p5.Graphics.js',
                  modules: {
                    Rendering: 1
                  },
                  classes: {
                    'p5.Graphics': 1
                  },
                  fors: {
                    p5: 1
                  },
                  namespaces: {}
                },
                'src/core/p5.Renderer.js': {
                  name: 'src/core/p5.Renderer.js',
                  modules: {},
                  classes: {
                    'p5.Renderer': 1
                  },
                  fors: {
                    p5: 1
                  },
                  namespaces: {}
                },
                'src/core/p5.Renderer2D.js': {
                  name: 'src/core/p5.Renderer2D.js',
                  modules: {},
                  classes: {},
                  fors: {},
                  namespaces: {}
                },
                'src/core/reference.js': {
                  name: 'src/core/reference.js',
                  modules: {
                    Declaration: 1,
                    'Comparison Operators': 1,
                    'Control Statement': 1,
                    Function: 1,
                    Types: 1,
                    Classes: 1,
                    'Iterative Statement': 1,
                    'JS Method': 1
                  },
                  classes: {},
                  fors: {
                    p5: 1,
                    JSON: 1,
                    console: 1
                  },
                  namespaces: {}
                },
                'src/core/rendering.js': {
                  name: 'src/core/rendering.js',
                  modules: {},
                  classes: {},
                  fors: {
                    p5: 1
                  },
                  namespaces: {}
                },
                'src/core/shim.js': {
                  name: 'src/core/shim.js',
                  modules: {},
                  classes: {},
                  fors: {},
                  namespaces: {}
                },
                'src/core/structure.js': {
                  name: 'src/core/structure.js',
                  modules: {},
                  classes: {},
                  fors: {
                    p5: 1
                  },
                  namespaces: {}
                },
                'src/core/transform.js': {
                  name: 'src/core/transform.js',
                  modules: {
                    Transform: 1
                  },
                  classes: {},
                  fors: {
                    p5: 1
                  },
                  namespaces: {}
                },
                'src/data/local_storage.js': {
                  name: 'src/data/local_storage.js',
                  modules: {
                    LocalStorage: 1
                  },
                  classes: {},
                  fors: {
                    p5: 1
                  },
                  namespaces: {}
                },
                'src/data/p5.TypedDict.js': {
                  name: 'src/data/p5.TypedDict.js',
                  modules: {
                    Dictionary: 1
                  },
                  classes: {
                    'p5.TypedDict': 1,
                    'p5.StringDict': 1,
                    'p5.NumberDict': 1
                  },
                  fors: {
                    'p5.TypedDict': 1,
                    p5: 1
                  },
                  namespaces: {}
                },
                'src/dom/dom.js': {
                  name: 'src/dom/dom.js',
                  modules: {},
                  classes: {
                    'p5.MediaElement': 1,
                    'p5.File': 1
                  },
                  fors: {
                    p5: 1,
                    'p5.Element': 1
                  },
                  namespaces: {}
                },
                'src/events/acceleration.js': {
                  name: 'src/events/acceleration.js',
                  modules: {
                    Acceleration: 1
                  },
                  classes: {},
                  fors: {
                    p5: 1
                  },
                  namespaces: {}
                },
                'src/events/keyboard.js': {
                  name: 'src/events/keyboard.js',
                  modules: {
                    Keyboard: 1
                  },
                  classes: {},
                  fors: {
                    p5: 1
                  },
                  namespaces: {}
                },
                'src/events/mouse.js': {
                  name: 'src/events/mouse.js',
                  modules: {
                    Mouse: 1
                  },
                  classes: {},
                  fors: {
                    p5: 1
                  },
                  namespaces: {}
                },
                'src/events/touch.js': {
                  name: 'src/events/touch.js',
                  modules: {
                    Touch: 1
                  },
                  classes: {},
                  fors: {
                    p5: 1
                  },
                  namespaces: {}
                },
                'src/image/filters.js': {
                  name: 'src/image/filters.js',
                  modules: {},
                  classes: {},
                  fors: {},
                  namespaces: {}
                },
                'src/image/image.js': {
                  name: 'src/image/image.js',
                  modules: {
                    Image: 1
                  },
                  classes: {},
                  fors: {
                    p5: 1
                  },
                  namespaces: {}
                },
                'src/image/loading_displaying.js': {
                  name: 'src/image/loading_displaying.js',
                  modules: {
                    'Loading & Displaying': 1
                  },
                  classes: {},
                  fors: {
                    p5: 1
                  },
                  namespaces: {}
                },
                'src/image/p5.Image.js': {
                  name: 'src/image/p5.Image.js',
                  modules: {},
                  classes: {
                    'p5.Image': 1
                  },
                  fors: {},
                  namespaces: {}
                },
                'src/image/pixels.js': {
                  name: 'src/image/pixels.js',
                  modules: {
                    Pixels: 1
                  },
                  classes: {},
                  fors: {
                    p5: 1
                  },
                  namespaces: {}
                },
                'src/io/files.js': {
                  name: 'src/io/files.js',
                  modules: {
                    Input: 1,
                    Output: 1
                  },
                  classes: {
                    'p5.PrintWriter': 1
                  },
                  fors: {
                    p5: 1
                  },
                  namespaces: {}
                },
                'src/io/p5.Table.js': {
                  name: 'src/io/p5.Table.js',
                  modules: {
                    Table: 1
                  },
                  classes: {
                    'p5.Table': 1
                  },
                  fors: {},
                  namespaces: {}
                },
                'src/io/p5.TableRow.js': {
                  name: 'src/io/p5.TableRow.js',
                  modules: {},
                  classes: {
                    'p5.TableRow': 1
                  },
                  fors: {},
                  namespaces: {}
                },
                'src/io/p5.XML.js': {
                  name: 'src/io/p5.XML.js',
                  modules: {},
                  classes: {
                    'p5.XML': 1
                  },
                  fors: {},
                  namespaces: {}
                },
                'src/math/calculation.js': {
                  name: 'src/math/calculation.js',
                  modules: {
                    Calculation: 1
                  },
                  classes: {},
                  fors: {
                    p5: 1
                  },
                  namespaces: {}
                },
                'src/math/math.js': {
                  name: 'src/math/math.js',
                  modules: {
                    Vector: 1
                  },
                  classes: {},
                  fors: {
                    p5: 1
                  },
                  namespaces: {}
                },
                'src/math/noise.js': {
                  name: 'src/math/noise.js',
                  modules: {
                    Noise: 1
                  },
                  classes: {},
                  fors: {
                    p5: 1
                  },
                  namespaces: {}
                },
                'src/math/p5.Vector.js': {
                  name: 'src/math/p5.Vector.js',
                  modules: {},
                  classes: {
                    'p5.Vector': 1
                  },
                  fors: {},
                  namespaces: {}
                },
                'src/math/random.js': {
                  name: 'src/math/random.js',
                  modules: {
                    Random: 1
                  },
                  classes: {},
                  fors: {
                    p5: 1
                  },
                  namespaces: {}
                },
                'src/math/trigonometry.js': {
                  name: 'src/math/trigonometry.js',
                  modules: {
                    Trigonometry: 1
                  },
                  classes: {},
                  fors: {
                    p5: 1
                  },
                  namespaces: {}
                },
                'src/typography/attributes.js': {
                  name: 'src/typography/attributes.js',
                  modules: {},
                  classes: {},
                  fors: {
                    p5: 1
                  },
                  namespaces: {}
                },
                'src/typography/loading_displaying.js': {
                  name: 'src/typography/loading_displaying.js',
                  modules: {},
                  classes: {},
                  fors: {
                    p5: 1
                  },
                  namespaces: {}
                },
                'src/typography/p5.Font.js': {
                  name: 'src/typography/p5.Font.js',
                  modules: {},
                  classes: {
                    'p5.Font': 1
                  },
                  fors: {},
                  namespaces: {}
                },
                'src/utilities/array_functions.js': {
                  name: 'src/utilities/array_functions.js',
                  modules: {
                    'Array Functions': 1
                  },
                  classes: {},
                  fors: {
                    p5: 1
                  },
                  namespaces: {}
                },
                'src/utilities/conversion.js': {
                  name: 'src/utilities/conversion.js',
                  modules: {
                    Conversion: 1
                  },
                  classes: {},
                  fors: {
                    p5: 1
                  },
                  namespaces: {}
                },
                'src/utilities/string_functions.js': {
                  name: 'src/utilities/string_functions.js',
                  modules: {
                    'String Functions': 1
                  },
                  classes: {},
                  fors: {
                    p5: 1
                  },
                  namespaces: {}
                },
                'src/utilities/time_date.js': {
                  name: 'src/utilities/time_date.js',
                  modules: {
                    'Time & Date': 1
                  },
                  classes: {},
                  fors: {
                    p5: 1
                  },
                  namespaces: {}
                },
                'src/webgl/3d_primitives.js': {
                  name: 'src/webgl/3d_primitives.js',
                  modules: {
                    '3D Primitives': 1
                  },
                  classes: {},
                  fors: {
                    p5: 1
                  },
                  namespaces: {}
                },
                'src/webgl/interaction.js': {
                  name: 'src/webgl/interaction.js',
                  modules: {
                    Interaction: 1
                  },
                  classes: {},
                  fors: {
                    p5: 1
                  },
                  namespaces: {}
                },
                'src/webgl/light.js': {
                  name: 'src/webgl/light.js',
                  modules: {
                    Lights: 1
                  },
                  classes: {},
                  fors: {
                    p5: 1
                  },
                  namespaces: {}
                },
                'src/webgl/loading.js': {
                  name: 'src/webgl/loading.js',
                  modules: {
                    '3D Models': 1
                  },
                  classes: {},
                  fors: {
                    p5: 1
                  },
                  namespaces: {}
                },
                'src/webgl/material.js': {
                  name: 'src/webgl/material.js',
                  modules: {
                    Material: 1
                  },
                  classes: {},
                  fors: {
                    p5: 1
                  },
                  namespaces: {}
                },
                'src/webgl/p5.Camera.js': {
                  name: 'src/webgl/p5.Camera.js',
                  modules: {
                    Camera: 1
                  },
                  classes: {
                    'p5.Camera': 1
                  },
                  fors: {
                    p5: 1,
                    'p5.Camera': 1
                  },
                  namespaces: {}
                },
                'src/webgl/p5.Geometry.js': {
                  name: 'src/webgl/p5.Geometry.js',
                  modules: {},
                  classes: {
                    'p5.Geometry': 1
                  },
                  fors: {
                    p5: 1
                  },
                  namespaces: {}
                },
                'src/webgl/p5.Matrix.js': {
                  name: 'src/webgl/p5.Matrix.js',
                  modules: {},
                  classes: {
                    'p5.Matrix': 1
                  },
                  fors: {},
                  namespaces: {}
                },
                'src/webgl/p5.RendererGL.Immediate.js': {
                  name: 'src/webgl/p5.RendererGL.Immediate.js',
                  modules: {},
                  classes: {},
                  fors: {},
                  namespaces: {}
                },
                'src/webgl/p5.RendererGL.Retained.js': {
                  name: 'src/webgl/p5.RendererGL.Retained.js',
                  modules: {},
                  classes: {},
                  fors: {},
                  namespaces: {}
                },
                'src/webgl/p5.RendererGL.js': {
                  name: 'src/webgl/p5.RendererGL.js',
                  modules: {},
                  classes: {
                    'p5.RendererGL': 1
                  },
                  fors: {
                    p5: 1
                  },
                  namespaces: {}
                },
                'src/webgl/p5.Shader.js': {
                  name: 'src/webgl/p5.Shader.js',
                  modules: {},
                  classes: {
                    'p5.Shader': 1
                  },
                  fors: {
                    p5: 1
                  },
                  namespaces: {}
                },
                'src/webgl/p5.Texture.js': {
                  name: 'src/webgl/p5.Texture.js',
                  modules: {},
                  classes: {
                    'p5.Texture': 1
                  },
                  fors: {
                    p5: 1
                  },
                  namespaces: {}
                },
                'src/webgl/text.js': {
                  name: 'src/webgl/text.js',
                  modules: {},
                  classes: {
                    ImageInfos: 1,
                    FontInfo: 1,
                    Cubic: 1
                  },
                  fors: {},
                  namespaces: {}
                },
                'lib/addons/p5.sound.js': {
                  name: 'lib/addons/p5.sound.js',
                  modules: {
                    'p5.sound': 1
                  },
                  classes: {
                    'p5.SoundFile': 1,
                    'p5.Amplitude': 1,
                    'p5.FFT': 1,
                    'p5.Signal': 1,
                    'p5.Oscillator': 1,
                    'p5.SinOsc': 1,
                    'p5.TriOsc': 1,
                    'p5.SawOsc': 1,
                    'p5.SqrOsc': 1,
                    'p5.Envelope': 1,
                    'p5.Pulse': 1,
                    'p5.Noise': 1,
                    'p5.AudioIn': 1,
                    'p5.Effect': 1,
                    'p5.Filter': 1,
                    'p5.LowPass': 1,
                    'p5.HighPass': 1,
                    'p5.BandPass': 1,
                    'p5.EQ': 1,
                    'p5.Panner3D': 1,
                    'p5.Delay': 1,
                    'p5.Reverb': 1,
                    'p5.Convolver': 1,
                    'p5.Phrase': 1,
                    'p5.Part': 1,
                    'p5.Score': 1,
                    'p5.SoundLoop': 1,
                    'p5.Compressor': 1,
                    'p5.SoundRecorder': 1,
                    'p5.PeakDetect': 1,
                    'p5.Gain': 1,
                    'p5.AudioVoice': 1,
                    'p5.MonoSynth': 1,
                    'p5.PolySynth': 1,
                    'p5.Distortion': 1
                  },
                  fors: {
                    'p5.sound': 1,
                    p5: 1
                  },
                  namespaces: {}
                },
                'lib/addons/p5.sound.min.js': {
                  name: 'lib/addons/p5.sound.min.js',
                  modules: {},
                  classes: {},
                  fors: {},
                  namespaces: {}
                }
              },
              modules: {
                Color: {
                  name: 'Color',
                  submodules: {
                    'Color Conversion': 1,
                    'Creating & Reading': 1,
                    Setting: 1
                  },
                  elements: {},
                  classes: {
                    'p5.Color': 1
                  },
                  fors: {
                    p5: 1
                  },
                  namespaces: {},
                  file: 'src/color/p5.Color.js',
                  line: 14
                },
                'Color Conversion': {
                  name: 'Color Conversion',
                  submodules: {},
                  elements: {},
                  classes: {},
                  fors: {
                    p5: 1
                  },
                  is_submodule: 1,
                  namespaces: {},
                  module: 'Color',
                  namespace: '',
                  file: 'src/color/color_conversion.js',
                  line: 1,
                  requires: ['core']
                },
                'Creating & Reading': {
                  name: 'Creating & Reading',
                  submodules: {},
                  elements: {},
                  classes: {
                    'p5.Color': 1
                  },
                  fors: {
                    p5: 1
                  },
                  is_submodule: 1,
                  namespaces: {},
                  module: 'Color',
                  namespace: '',
                  file: 'src/color/p5.Color.js',
                  line: 14,
                  requires: ['core', 'constants'],
                  description:
                    '<p>Each color stores the color mode and level maxes that applied at the\ntime of its construction. These are used to interpret the input arguments\n(at construction and later for that instance of color) and to format the\noutput e.g. when <a href="#/p5/saturation">saturation()</a> is requested.</p>\n<p>Internally we store an array representing the ideal RGBA values in floating\npoint form, normalized from 0 to 1. From this we calculate the closest\nscreen color (RGBA levels from 0 to 255) and expose this to the renderer.</p>\n<p>We also cache normalized, floating point components of the color in various\nrepresentations as they are calculated. This is done to prevent repeating a\nconversion that has already been performed.</p>\n'
                },
                Setting: {
                  name: 'Setting',
                  submodules: {},
                  elements: {},
                  classes: {},
                  fors: {
                    p5: 1
                  },
                  is_submodule: 1,
                  namespaces: {},
                  module: 'Color',
                  namespace: '',
                  file: 'src/color/setting.js',
                  line: 1,
                  requires: ['core', 'constants']
                },
                Shape: {
                  name: 'Shape',
                  submodules: {
                    '2D Primitives': 1,
                    Curves: 1,
                    Vertex: 1,
                    '3D Primitives': 1,
                    '3D Models': 1
                  },
                  elements: {},
                  classes: {},
                  fors: {
                    p5: 1
                  },
                  namespaces: {}
                },
                '2D Primitives': {
                  name: '2D Primitives',
                  submodules: {},
                  elements: {},
                  classes: {},
                  fors: {
                    p5: 1
                  },
                  is_submodule: 1,
                  namespaces: {},
                  module: 'Shape',
                  namespace: '',
                  file: 'src/core/shape/2d_primitives.js',
                  line: 1,
                  requires: ['core', 'constants']
                },
                Attributes: {
                  name: 'Attributes',
                  submodules: {},
                  elements: {},
                  classes: {},
                  fors: {
                    p5: 1
                  },
                  is_submodule: 1,
                  namespaces: {},
                  module: 'Typography',
                  namespace: '',
                  file: 'src/core/shape/attributes.js',
                  line: 1,
                  requires: ['core', 'constants']
                },
                Curves: {
                  name: 'Curves',
                  submodules: {},
                  elements: {},
                  classes: {},
                  fors: {
                    p5: 1
                  },
                  is_submodule: 1,
                  namespaces: {},
                  module: 'Shape',
                  namespace: '',
                  file: 'src/core/shape/curves.js',
                  line: 1,
                  requires: ['core']
                },
                Vertex: {
                  name: 'Vertex',
                  submodules: {},
                  elements: {},
                  classes: {},
                  fors: {
                    p5: 1
                  },
                  is_submodule: 1,
                  namespaces: {},
                  module: 'Shape',
                  namespace: '',
                  file: 'src/core/shape/vertex.js',
                  line: 1,
                  requires: ['core', 'constants']
                },
                Constants: {
                  name: 'Constants',
                  submodules: {},
                  elements: {},
                  classes: {},
                  fors: {
                    p5: 1
                  },
                  namespaces: {},
                  module: 'Constants',
                  file: 'src/core/constants.js',
                  line: 1
                },
                Environment: {
                  name: 'Environment',
                  submodules: {},
                  elements: {},
                  classes: {},
                  fors: {
                    p5: 1
                  },
                  namespaces: {},
                  module: 'Environment',
                  file: 'src/core/environment.js',
                  line: 1,
                  requires: ['core', 'constants']
                },
                Structure: {
                  name: 'Structure',
                  submodules: {},
                  elements: {},
                  classes: {},
                  fors: {
                    p5: 1
                  },
                  namespaces: {},
                  module: 'Structure',
                  file: 'src/core/main.js',
                  line: 1,
                  requires: ['constants']
                },
                DOM: {
                  name: 'DOM',
                  submodules: {},
                  elements: {},
                  classes: {
                    'p5.Element': 1,
                    'p5.MediaElement': 1,
                    'p5.File': 1
                  },
                  fors: {
                    'p5.Element': 1,
                    p5: 1
                  },
                  namespaces: {},
                  module: 'DOM',
                  file: 'src/dom/dom.js',
                  line: 3268,
                  description:
                    "<p>The web is much more than just canvas and the DOM functionality makes it easy to interact\nwith other HTML5 objects, including text, hyperlink, image, input, video,\naudio, and webcam.</p>\n<p>There is a set of creation methods, DOM manipulation methods, and\nan extended <a href=\"#/p5.Element\">p5.Element</a> that supports a range of HTML elements. See the\n<a href='https://github.com/processing/p5.js/wiki/Beyond-the-canvas'>\nbeyond the canvas tutorial</a> for a full overview of how this addon works.\n\n<p>See <a href='https://github.com/processing/p5.js/wiki/Beyond-the-canvas'>tutorial: beyond the canvas</a>\nfor more info on how to use this library.</a>",
                  requires: ['p5']
                },
                Rendering: {
                  name: 'Rendering',
                  submodules: {
                    undefined: 1
                  },
                  elements: {},
                  classes: {
                    'p5.RendererGL': 1,
                    'p5.Graphics': 1,
                    'p5.Renderer': 1
                  },
                  fors: {
                    p5: 1
                  },
                  namespaces: {},
                  module: 'Rendering',
                  file: 'src/webgl/p5.RendererGL.js',
                  line: 548,
                  description:
                    '<p>Thin wrapper around a renderer, to be used for creating a\ngraphics buffer object. Use this class if you need\nto draw into an off-screen graphics buffer. The two parameters define the\nwidth and height in pixels. The fields and methods for this class are\nextensive, but mirror the normal drawing API for p5.</p>\n'
                },
                Foundation: {
                  name: 'Foundation',
                  submodules: {
                    Declaration: 1,
                    'Comparison Operators': 1,
                    'Control Statement': 1,
                    Function: 1,
                    Types: 1,
                    Classes: 1,
                    'Iterative Statement': 1
                  },
                  elements: {},
                  classes: {
                    JSON: 1,
                    console: 1
                  },
                  fors: {
                    p5: 1,
                    JSON: 1,
                    console: 1
                  },
                  namespaces: {}
                },
                Declaration: {
                  name: 'Declaration',
                  submodules: {},
                  elements: {},
                  classes: {},
                  fors: {
                    p5: 1
                  },
                  is_submodule: 1,
                  namespaces: {},
                  module: 'Foundation',
                  namespace: '',
                  file: 'src/core/reference.js',
                  line: 1
                },
                'Comparison Operators': {
                  name: 'Comparison Operators',
                  submodules: {},
                  elements: {},
                  classes: {},
                  fors: {},
                  is_submodule: 1,
                  namespaces: {},
                  module: 'Foundation',
                  namespace: '',
                  file: 'src/core/reference.js',
                  line: 57
                },
                'Control Statement': {
                  name: 'Control Statement',
                  submodules: {},
                  elements: {},
                  classes: {},
                  fors: {},
                  is_submodule: 1,
                  namespaces: {},
                  module: 'Foundation',
                  namespace: '',
                  file: 'src/core/reference.js',
                  line: 162
                },
                Function: {
                  name: 'Function',
                  submodules: {},
                  elements: {},
                  classes: {},
                  fors: {},
                  is_submodule: 1,
                  namespaces: {},
                  module: 'Foundation',
                  namespace: '',
                  file: 'src/core/reference.js',
                  line: 193
                },
                Types: {
                  name: 'Types',
                  submodules: {},
                  elements: {},
                  classes: {},
                  fors: {},
                  is_submodule: 1,
                  namespaces: {},
                  module: 'Foundation',
                  namespace: '',
                  file: 'src/core/reference.js',
                  line: 237
                },
                Classes: {
                  name: 'Classes',
                  submodules: {},
                  elements: {},
                  classes: {},
                  fors: {},
                  is_submodule: 1,
                  namespaces: {},
                  module: 'Foundation',
                  namespace: '',
                  file: 'src/core/reference.js',
                  line: 317
                },
                'Iterative Statement': {
                  name: 'Iterative Statement',
                  submodules: {},
                  elements: {},
                  classes: {},
                  fors: {},
                  is_submodule: 1,
                  namespaces: {},
                  module: 'Foundation',
                  namespace: '',
                  file: 'src/core/reference.js',
                  line: 344
                },
                'JS Method': {
                  name: 'JS Method',
                  submodules: {},
                  elements: {},
                  classes: {
                    JSON: 1,
                    console: 1
                  },
                  fors: {
                    JSON: 1,
                    console: 1
                  },
                  is_submodule: 1,
                  namespaces: {},
                  module: 'IO',
                  namespace: '',
                  file: 'src/core/reference.js',
                  line: 416
                },
                Transform: {
                  name: 'Transform',
                  submodules: {},
                  elements: {},
                  classes: {},
                  fors: {
                    p5: 1
                  },
                  namespaces: {},
                  module: 'Transform',
                  file: 'src/core/transform.js',
                  line: 1,
                  requires: ['core', 'constants']
                },
                Data: {
                  name: 'Data',
                  submodules: {
                    LocalStorage: 1,
                    Dictionary: 1,
                    'Array Functions': 1,
                    Conversion: 1,
                    'String Functions': 1
                  },
                  elements: {},
                  classes: {
                    'p5.TypedDict': 1,
                    'p5.StringDict': 1,
                    'p5.NumberDict': 1
                  },
                  fors: {
                    p5: 1,
                    'p5.TypedDict': 1
                  },
                  namespaces: {},
                  file: 'src/data/p5.TypedDict.js',
                  line: 416
                },
                LocalStorage: {
                  name: 'LocalStorage',
                  submodules: {},
                  elements: {},
                  classes: {},
                  fors: {
                    p5: 1
                  },
                  is_submodule: 1,
                  namespaces: {},
                  module: 'Data',
                  namespace: '',
                  file: 'src/data/local_storage.js',
                  line: 1,
                  requires: [
                    'core\n\nThis module defines the p5 methods for working with local storage'
                  ]
                },
                Dictionary: {
                  name: 'Dictionary',
                  submodules: {},
                  elements: {},
                  classes: {
                    'p5.TypedDict': 1,
                    'p5.StringDict': 1,
                    'p5.NumberDict': 1
                  },
                  fors: {
                    'p5.TypedDict': 1,
                    p5: 1
                  },
                  is_submodule: 1,
                  namespaces: {},
                  module: 'Data',
                  namespace: '',
                  file: 'src/data/p5.TypedDict.js',
                  line: 416,
                  requires: [
                    'core\n\nThis module defines the p5 methods for the p5 Dictionary classes.\nThe classes StringDict and NumberDict are for storing and working\nwith key-value pairs.'
                  ],
                  description:
                    '<p>Base class for all p5.Dictionary types. Specifically\n typed Dictionary classes inherit from this class.</p>\n'
                },
                Events: {
                  name: 'Events',
                  submodules: {
                    Acceleration: 1,
                    Keyboard: 1,
                    Mouse: 1,
                    Touch: 1
                  },
                  elements: {},
                  classes: {},
                  fors: {
                    p5: 1
                  },
                  namespaces: {}
                },
                Acceleration: {
                  name: 'Acceleration',
                  submodules: {},
                  elements: {},
                  classes: {},
                  fors: {
                    p5: 1
                  },
                  is_submodule: 1,
                  namespaces: {},
                  module: 'Events',
                  namespace: '',
                  file: 'src/events/acceleration.js',
                  line: 1,
                  requires: ['core']
                },
                Keyboard: {
                  name: 'Keyboard',
                  submodules: {},
                  elements: {},
                  classes: {},
                  fors: {
                    p5: 1
                  },
                  is_submodule: 1,
                  namespaces: {},
                  module: 'Events',
                  namespace: '',
                  file: 'src/events/keyboard.js',
                  line: 1,
                  requires: ['core']
                },
                Mouse: {
                  name: 'Mouse',
                  submodules: {},
                  elements: {},
                  classes: {},
                  fors: {
                    p5: 1
                  },
                  is_submodule: 1,
                  namespaces: {},
                  module: 'Events',
                  namespace: '',
                  file: 'src/events/mouse.js',
                  line: 1,
                  requires: ['core', 'constants']
                },
                Touch: {
                  name: 'Touch',
                  submodules: {},
                  elements: {},
                  classes: {},
                  fors: {
                    p5: 1
                  },
                  is_submodule: 1,
                  namespaces: {},
                  module: 'Events',
                  namespace: '',
                  file: 'src/events/touch.js',
                  line: 1,
                  requires: ['core']
                },
                Image: {
                  name: 'Image',
                  submodules: {
                    Pixels: 1
                  },
                  elements: {},
                  classes: {
                    'p5.Image': 1
                  },
                  fors: {
                    p5: 1
                  },
                  namespaces: {},
                  module: 'Image',
                  file: 'src/image/p5.Image.js',
                  line: 21,
                  requires: ['core'],
                  description:
                    '<p>Creates a new <a href="#/p5.Image">p5.Image</a>. A <a href="#/p5.Image">p5.Image</a> is a canvas backed representation of an\nimage.\n<br><br>\np5 can display .gif, .jpg and .png images. Images may be displayed\nin 2D and 3D space. Before an image is used, it must be loaded with the\n<a href="#/p5/loadImage">loadImage()</a> function. The <a href="#/p5.Image">p5.Image</a> class contains fields for the width and\nheight of the image, as well as an array called <a href="#/p5.Image/pixels">pixels[]</a> that contains the\nvalues for every pixel in the image.\n<br><br>\nThe methods described below allow easy access to the image&#39;s pixels and\nalpha channel and simplify the process of compositing.\n<br><br>\nBefore using the <a href="#/p5.Image/pixels">pixels[]</a> array, be sure to use the <a href="#/p5.Image/loadPixels">loadPixels()</a> method on\nthe image to make sure that the pixel data is properly loaded.</p>\n'
                },
                'Loading & Displaying': {
                  name: 'Loading & Displaying',
                  submodules: {},
                  elements: {},
                  classes: {
                    'p5.Font': 1
                  },
                  fors: {
                    p5: 1
                  },
                  is_submodule: 1,
                  namespaces: {},
                  module: 'Typography',
                  namespace: '',
                  file: 'src/typography/p5.Font.js',
                  line: 13,
                  requires: ['core'],
                  description:
                    '<p>This module defines the <a href="#/p5.Font">p5.Font</a> class and functions for\ndrawing text to the display canvas.</p>\n'
                },
                Pixels: {
                  name: 'Pixels',
                  submodules: {},
                  elements: {},
                  classes: {},
                  fors: {
                    p5: 1
                  },
                  is_submodule: 1,
                  namespaces: {},
                  module: 'Image',
                  namespace: '',
                  file: 'src/image/pixels.js',
                  line: 1,
                  requires: ['core']
                },
                IO: {
                  name: 'IO',
                  submodules: {
                    'JS Method': 1,
                    Input: 1,
                    Output: 1,
                    Table: 1,
                    'Time & Date': 1
                  },
                  elements: {},
                  classes: {
                    p5: 1,
                    'p5.PrintWriter': 1,
                    'p5.Table': 1,
                    'p5.TableRow': 1,
                    'p5.XML': 1
                  },
                  fors: {
                    p5: 1
                  },
                  namespaces: {},
                  file: 'src/io/p5.XML.js',
                  line: 9
                },
                Input: {
                  name: 'Input',
                  submodules: {},
                  elements: {},
                  classes: {
                    'p5.XML': 1
                  },
                  fors: {
                    p5: 1
                  },
                  is_submodule: 1,
                  namespaces: {},
                  module: 'IO',
                  namespace: '',
                  file: 'src/io/p5.XML.js',
                  line: 9,
                  requires: ['core'],
                  description:
                    '<p>XML is a representation of an XML object, able to parse XML code. Use\n<a href="#/p5/loadXML">loadXML()</a> to load external XML files and create XML objects.</p>\n'
                },
                Output: {
                  name: 'Output',
                  submodules: {},
                  elements: {},
                  classes: {
                    p5: 1,
                    'p5.PrintWriter': 1
                  },
                  fors: {
                    p5: 1
                  },
                  is_submodule: 1,
                  namespaces: {},
                  module: 'IO',
                  namespace: '',
                  file: 'src/io/files.js',
                  line: 1235,
                  description:
                    '<p>This is the p5 instance constructor.</p>\n<p>A p5 instance holds all the properties and methods related to\na p5 sketch.  It expects an incoming sketch closure and it can also\ntake an optional node parameter for attaching the generated p5 canvas\nto a node.  The sketch closure takes the newly created p5 instance as\nits sole argument and may optionally set <a href="#/p5/preload">preload()</a>, <a href="#/p5/setup">setup()</a>, and/or\n<a href="#/p5/draw">draw()</a> properties on it for running a sketch.</p>\n<p>A p5 sketch can run in &quot;global&quot; or &quot;instance&quot; mode:\n&quot;global&quot;   - all properties and methods are attached to the window\n&quot;instance&quot; - all properties and methods are bound to this p5 object</p>\n'
                },
                Table: {
                  name: 'Table',
                  submodules: {},
                  elements: {},
                  classes: {
                    'p5.Table': 1,
                    'p5.TableRow': 1
                  },
                  fors: {},
                  is_submodule: 1,
                  namespaces: {},
                  module: 'IO',
                  namespace: '',
                  file: 'src/io/p5.TableRow.js',
                  line: 9,
                  requires: ['core'],
                  description:
                    '<p><a href="#/p5.Table">Table</a> objects store data with multiple rows and columns, much\nlike in a traditional spreadsheet. Tables can be generated from\nscratch, dynamically, or using data from an existing file.</p>\n'
                },
                Math: {
                  name: 'Math',
                  submodules: {
                    Calculation: 1,
                    Vector: 1,
                    Noise: 1,
                    Random: 1,
                    Trigonometry: 1
                  },
                  elements: {},
                  classes: {
                    'p5.Vector': 1
                  },
                  fors: {
                    p5: 1
                  },
                  namespaces: {},
                  file: 'src/math/p5.Vector.js',
                  line: 10
                },
                Calculation: {
                  name: 'Calculation',
                  submodules: {},
                  elements: {},
                  classes: {},
                  fors: {
                    p5: 1
                  },
                  is_submodule: 1,
                  namespaces: {},
                  module: 'Math',
                  namespace: '',
                  file: 'src/math/calculation.js',
                  line: 1,
                  requires: ['core']
                },
                Vector: {
                  name: 'Vector',
                  submodules: {},
                  elements: {},
                  classes: {
                    'p5.Vector': 1
                  },
                  fors: {
                    p5: 1
                  },
                  is_submodule: 1,
                  namespaces: {},
                  module: 'Math',
                  namespace: '',
                  file: 'src/math/p5.Vector.js',
                  line: 10,
                  requires: ['core'],
                  description:
                    '<p>A class to describe a two or three dimensional vector, specifically\na Euclidean (also known as geometric) vector. A vector is an entity\nthat has both magnitude and direction. The datatype, however, stores\nthe components of the vector (x, y for 2D, and x, y, z for 3D). The magnitude\nand direction can be accessed via the methods <a href="#/p5/mag">mag()</a> and <a href="#/p5/heading">heading()</a>.\n<br><br>\nIn many of the p5.js examples, you will see <a href="#/p5.Vector">p5.Vector</a> used to describe a\nposition, velocity, or acceleration. For example, if you consider a rectangle\nmoving across the screen, at any given instant it has a position (a vector\nthat points from the origin to its location), a velocity (the rate at which\nthe object&#39;s position changes per time unit, expressed as a vector), and\nacceleration (the rate at which the object&#39;s velocity changes per time\nunit, expressed as a vector).\n<br><br>\nSince vectors represent groupings of values, we cannot simply use\ntraditional addition/multiplication/etc. Instead, we&#39;ll need to do some\n&quot;vector&quot; math, which is made easy by the methods inside the <a href="#/p5.Vector">p5.Vector</a> class.</p>\n'
                },
                Noise: {
                  name: 'Noise',
                  submodules: {},
                  elements: {},
                  classes: {},
                  fors: {
                    p5: 1
                  },
                  is_submodule: 1,
                  namespaces: {},
                  module: 'Math',
                  namespace: '',
                  file: 'src/math/noise.js',
                  line: 14,
                  requires: ['core']
                },
                Random: {
                  name: 'Random',
                  submodules: {},
                  elements: {},
                  classes: {},
                  fors: {
                    p5: 1
                  },
                  is_submodule: 1,
                  namespaces: {},
                  module: 'Math',
                  namespace: '',
                  file: 'src/math/random.js',
                  line: 1,
                  requires: ['core']
                },
                Trigonometry: {
                  name: 'Trigonometry',
                  submodules: {},
                  elements: {},
                  classes: {},
                  fors: {
                    p5: 1
                  },
                  is_submodule: 1,
                  namespaces: {},
                  module: 'Math',
                  namespace: '',
                  file: 'src/math/trigonometry.js',
                  line: 1,
                  requires: ['core', 'constants']
                },
                Typography: {
                  name: 'Typography',
                  submodules: {
                    Attributes: 1,
                    'Loading & Displaying': 1
                  },
                  elements: {},
                  classes: {
                    'p5.Font': 1
                  },
                  fors: {
                    p5: 1
                  },
                  namespaces: {},
                  file: 'src/typography/p5.Font.js',
                  line: 13
                },
                'Array Functions': {
                  name: 'Array Functions',
                  submodules: {},
                  elements: {},
                  classes: {},
                  fors: {
                    p5: 1
                  },
                  is_submodule: 1,
                  namespaces: {},
                  module: 'Data',
                  namespace: '',
                  file: 'src/utilities/array_functions.js',
                  line: 1,
                  requires: ['core']
                },
                Conversion: {
                  name: 'Conversion',
                  submodules: {},
                  elements: {},
                  classes: {},
                  fors: {
                    p5: 1
                  },
                  is_submodule: 1,
                  namespaces: {},
                  module: 'Data',
                  namespace: '',
                  file: 'src/utilities/conversion.js',
                  line: 1,
                  requires: ['core']
                },
                'String Functions': {
                  name: 'String Functions',
                  submodules: {},
                  elements: {},
                  classes: {},
                  fors: {
                    p5: 1
                  },
                  is_submodule: 1,
                  namespaces: {},
                  module: 'Data',
                  namespace: '',
                  file: 'src/utilities/string_functions.js',
                  line: 1,
                  requires: ['core']
                },
                'Time & Date': {
                  name: 'Time & Date',
                  submodules: {},
                  elements: {},
                  classes: {},
                  fors: {
                    p5: 1
                  },
                  is_submodule: 1,
                  namespaces: {},
                  module: 'IO',
                  namespace: '',
                  file: 'src/utilities/time_date.js',
                  line: 1,
                  requires: ['core']
                },
                '3D Primitives': {
                  name: '3D Primitives',
                  submodules: {},
                  elements: {},
                  classes: {},
                  fors: {
                    p5: 1
                  },
                  is_submodule: 1,
                  namespaces: {},
                  module: 'Shape',
                  namespace: '',
                  file: 'src/webgl/3d_primitives.js',
                  line: 1,
                  requires: ['core', 'p5.Geometry']
                },
                'Lights, Camera': {
                  name: 'Lights, Camera',
                  submodules: {
                    Interaction: 1,
                    Lights: 1,
                    Material: 1,
                    Camera: 1
                  },
                  elements: {},
                  classes: {
                    'p5.Camera': 1,
                    'p5.Geometry': 1,
                    'p5.Matrix': 1,
                    'p5.Shader': 1,
                    'p5.Texture': 1,
                    ImageInfos: 1,
                    FontInfo: 1,
                    Cubic: 1
                  },
                  fors: {
                    p5: 1,
                    'p5.Camera': 1
                  },
                  namespaces: {},
                  file: 'src/webgl/text.js',
                  line: 260
                },
                Interaction: {
                  name: 'Interaction',
                  submodules: {},
                  elements: {},
                  classes: {},
                  fors: {
                    p5: 1
                  },
                  is_submodule: 1,
                  namespaces: {},
                  module: 'Lights, Camera',
                  namespace: '',
                  file: 'src/webgl/interaction.js',
                  line: 1,
                  requires: ['core']
                },
                Lights: {
                  name: 'Lights',
                  submodules: {},
                  elements: {},
                  classes: {},
                  fors: {
                    p5: 1
                  },
                  is_submodule: 1,
                  namespaces: {},
                  module: 'Lights, Camera',
                  namespace: '',
                  file: 'src/webgl/light.js',
                  line: 1,
                  requires: ['core']
                },
                '3D Models': {
                  name: '3D Models',
                  submodules: {},
                  elements: {},
                  classes: {},
                  fors: {
                    p5: 1
                  },
                  is_submodule: 1,
                  namespaces: {},
                  module: 'Shape',
                  namespace: '',
                  file: 'src/webgl/loading.js',
                  line: 1,
                  requires: ['core', 'p5.Geometry']
                },
                Material: {
                  name: 'Material',
                  submodules: {},
                  elements: {},
                  classes: {
                    'p5.Geometry': 1,
                    'p5.Shader': 1,
                    'p5.Texture': 1
                  },
                  fors: {
                    p5: 1
                  },
                  is_submodule: 1,
                  namespaces: {},
                  module: 'Lights, Camera',
                  namespace: '',
                  file: 'src/webgl/p5.Texture.js',
                  line: 12,
                  requires: ['core'],
                  description: '<p>This module defines the p5.Shader class</p>\n'
                },
                Camera: {
                  name: 'Camera',
                  submodules: {},
                  elements: {},
                  classes: {
                    'p5.Camera': 1
                  },
                  fors: {
                    p5: 1,
                    'p5.Camera': 1
                  },
                  is_submodule: 1,
                  namespaces: {},
                  module: 'Lights, Camera',
                  namespace: '',
                  file: 'src/webgl/p5.Camera.js',
                  line: 319,
                  requires: ['core'],
                  description:
                    '<p>This class describes a camera for use in p5&#39;s\n<a href="https://github.com/processing/p5.js/wiki/Getting-started-with-WebGL-in-p5">\nWebGL mode</a>. It contains camera position, orientation, and projection\ninformation necessary for rendering a 3D scene.</p>\n<p>New p5.Camera objects can be made through the\n<a href="#/p5/createCamera">createCamera()</a> function and controlled through\nthe methods described below. A camera created in this way will use a default\nposition in the scene and a default perspective projection until these\nproperties are changed through the various methods available. It is possible\nto create multiple cameras, in which case the current camera\ncan be set through the <a href="#/p5/setCamera">setCamera()</a> method.</p>\n<p>Note:\nThe methods below operate in two coordinate systems: the &#39;world&#39; coordinate\nsystem describe positions in terms of their relationship to the origin along\nthe X, Y and Z axes whereas the camera&#39;s &#39;local&#39; coordinate system\ndescribes positions from the camera&#39;s point of view: left-right, up-down,\nand forward-backward. The <a href="#/p5.Camera/move">move()</a> method,\nfor instance, moves the camera along its own axes, whereas the\n<a href="#/p5.Camera/setPosition">setPosition()</a>\nmethod sets the camera&#39;s position in world-space.</p>\n'
                },
                'p5.sound': {
                  name: 'p5.sound',
                  submodules: {},
                  elements: {},
                  classes: {
                    'p5.sound': 1,
                    'p5.SoundFile': 1,
                    'p5.Amplitude': 1,
                    'p5.FFT': 1,
                    'p5.Signal': 1,
                    'p5.Oscillator': 1,
                    'p5.SinOsc': 1,
                    'p5.TriOsc': 1,
                    'p5.SawOsc': 1,
                    'p5.SqrOsc': 1,
                    'p5.Envelope': 1,
                    'p5.Pulse': 1,
                    'p5.Noise': 1,
                    'p5.AudioIn': 1,
                    'p5.Effect': 1,
                    'p5.Filter': 1,
                    'p5.LowPass': 1,
                    'p5.HighPass': 1,
                    'p5.BandPass': 1,
                    'p5.EQ': 1,
                    'p5.Panner3D': 1,
                    'p5.Delay': 1,
                    'p5.Reverb': 1,
                    'p5.Convolver': 1,
                    'p5.Phrase': 1,
                    'p5.Part': 1,
                    'p5.Score': 1,
                    'p5.SoundLoop': 1,
                    'p5.Compressor': 1,
                    'p5.SoundRecorder': 1,
                    'p5.PeakDetect': 1,
                    'p5.Gain': 1,
                    'p5.AudioVoice': 1,
                    'p5.MonoSynth': 1,
                    'p5.PolySynth': 1,
                    'p5.Distortion': 1
                  },
                  fors: {
                    'p5.sound': 1,
                    p5: 1
                  },
                  namespaces: {},
                  module: 'p5.sound',
                  file: 'lib/addons/p5.sound.js',
                  line: 12767,
                  description:
                    '<p>p5.sound extends p5 with <a href="http://caniuse.com/audio-api"\ntarget="_blank">Web Audio</a> functionality including audio input,\nplayback, analysis and synthesis.\n<br/><br/>\n<a href="#/p5.SoundFile"><b>p5.SoundFile</b></a>: Load and play sound files.<br/>\n<a href="#/p5.Amplitude"><b>p5.Amplitude</b></a>: Get the current volume of a sound.<br/>\n<a href="#/p5.AudioIn"><b>p5.AudioIn</b></a>: Get sound from an input source, typically\n  a computer microphone.<br/>\n<a href="#/p5.FFT"><b>p5.FFT</b></a>: Analyze the frequency of sound. Returns\n  results from the frequency spectrum or time domain (waveform).<br/>\n<a href="#/p5.Oscillator"><b>p5.Oscillator</b></a>: Generate Sine,\n  Triangle, Square and Sawtooth waveforms. Base class of\n  <a href="#/p5.Noise">p5.Noise</a> and <a href="#/p5.Pulse">p5.Pulse</a>.\n  <br/>\n<a href="#/p5.Envelope"><b>p5.Envelope</b></a>: An Envelope is a series\n  of fades over time. Often used to control an object&#39;s\n  output gain level as an &quot;ADSR Envelope&quot; (Attack, Decay,\n  Sustain, Release). Can also modulate other parameters.<br/>\n<a href="#/p5.Delay"><b>p5.Delay</b></a>: A delay effect with\n  parameters for feedback, delayTime, and lowpass filter.<br/>\n<a href="#/p5.Filter"><b>p5.Filter</b></a>: Filter the frequency range of a\n  sound.\n<br/>\n<a href="#/p5.Reverb"><b>p5.Reverb</b></a>: Add reverb to a sound by specifying\n  duration and decay. <br/>\n<b><a href="#/p5.Convolver">p5.Convolver</a>:</b> Extends\n<a href="#/p5.Reverb">p5.Reverb</a> to simulate the sound of real\n  physical spaces through convolution.<br/>\n<b><a href="#/p5.SoundRecorder">p5.SoundRecorder</a></b>: Record sound for playback\n  / save the .wav file.\n<b><a href="#/p5.Phrase">p5.Phrase</a></b>, <b><a href="#/p5.Part">p5.Part</a></b> and\n<b><a href="#/p5.Score">p5.Score</a></b>: Compose musical sequences.\n<br/><br/>\np5.sound is on <a href="https://github.com/therewasaguy/p5.sound/">GitHub</a>.\nDownload the latest version\n<a href="https://github.com/therewasaguy/p5.sound/blob/master/lib/p5.sound.js">here</a>.</p>\n',
                  tag: 'main',
                  itemtype: 'main'
                }
              },
              classes: {
                p5: {
                  name: 'p5',
                  shortname: 'p5',
                  classitems: [],
                  plugins: [],
                  extensions: [],
                  plugin_for: [],
                  extension_for: [],
                  module: 'IO',
                  submodule: 'Output',
                  namespace: '',
                  file: 'src/core/main.js',
                  line: 13,
                  description:
                    '<p>This is the p5 instance constructor.</p>\n<p>A p5 instance holds all the properties and methods related to\na p5 sketch.  It expects an incoming sketch closure and it can also\ntake an optional node parameter for attaching the generated p5 canvas\nto a node.  The sketch closure takes the newly created p5 instance as\nits sole argument and may optionally set <a href="#/p5/preload">preload()</a>, <a href="#/p5/setup">setup()</a>, and/or\n<a href="#/p5/draw">draw()</a> properties on it for running a sketch.</p>\n<p>A p5 sketch can run in &quot;global&quot; or &quot;instance&quot; mode:\n&quot;global&quot;   - all properties and methods are attached to the window\n&quot;instance&quot; - all properties and methods are bound to this p5 object</p>\n',
                  is_constructor: 1,
                  params: [
                    {
                      name: 'sketch',
                      description:
                        '<p>a closure that can set optional <a href="#/p5/preload">preload()</a>,\n                             <a href="#/p5/setup">setup()</a>, and/or <a href="#/p5/draw">draw()</a> properties on the\n                             given p5 instance</p>\n',
                      type: 'Function'
                    },
                    {
                      name: 'node',
                      description: '<p>element to attach canvas to</p>\n',
                      type: 'HTMLElement',
                      optional: true
                    }
                  ],
                  return: {
                    description: 'a p5 instance',
                    type: 'P5'
                  }
                },
                'p5.Color': {
                  name: 'p5.Color',
                  shortname: 'p5.Color',
                  classitems: [],
                  plugins: [],
                  extensions: [],
                  plugin_for: [],
                  extension_for: [],
                  module: 'Color',
                  submodule: 'Creating & Reading',
                  namespace: '',
                  file: 'src/color/p5.Color.js',
                  line: 14,
                  description:
                    '<p>Each color stores the color mode and level maxes that applied at the\ntime of its construction. These are used to interpret the input arguments\n(at construction and later for that instance of color) and to format the\noutput e.g. when <a href="#/p5/saturation">saturation()</a> is requested.</p>\n<p>Internally we store an array representing the ideal RGBA values in floating\npoint form, normalized from 0 to 1. From this we calculate the closest\nscreen color (RGBA levels from 0 to 255) and expose this to the renderer.</p>\n<p>We also cache normalized, floating point components of the color in various\nrepresentations as they are calculated. This is done to prevent repeating a\nconversion that has already been performed.</p>\n'
                },
                'p5.Element': {
                  name: 'p5.Element',
                  shortname: 'p5.Element',
                  classitems: [],
                  plugins: [],
                  extensions: [],
                  plugin_for: [],
                  extension_for: [],
                  module: 'DOM',
                  submodule: 'DOM',
                  namespace: '',
                  file: 'src/core/p5.Element.js',
                  line: 9,
                  description:
                    '<p>Base class for all elements added to a sketch, including canvas,\ngraphics buffers, and other HTML elements. It is not called directly, but <a href="#/p5.Element">p5.Element</a>\nobjects are created by calling <a href="#/p5/createCanvas">createCanvas</a>, <a href="#/p5/createGraphics">createGraphics</a>,\n<a href="#/p5/createDiv">createDiv</a>, <a href="#/p5/createImg">createImg</a>, <a href="#/p5/createInput">createInput</a>, etc.</p>\n',
                  params: [
                    {
                      name: 'elt',
                      description: '<p>DOM node that is wrapped</p>\n',
                      type: 'String'
                    },
                    {
                      name: 'pInst',
                      description: '<p>pointer to p5 instance</p>\n',
                      type: 'P5',
                      optional: true
                    }
                  ]
                },
                'p5.Graphics': {
                  name: 'p5.Graphics',
                  shortname: 'p5.Graphics',
                  classitems: [],
                  plugins: [],
                  extensions: [],
                  plugin_for: [],
                  extension_for: [],
                  module: 'Rendering',
                  submodule: 'Rendering',
                  namespace: '',
                  file: 'src/core/p5.Graphics.js',
                  line: 10,
                  description:
                    '<p>Thin wrapper around a renderer, to be used for creating a\ngraphics buffer object. Use this class if you need\nto draw into an off-screen graphics buffer. The two parameters define the\nwidth and height in pixels. The fields and methods for this class are\nextensive, but mirror the normal drawing API for p5.</p>\n',
                  extends: 'p5.Element',
                  params: [
                    {
                      name: 'w',
                      description: '<p>width</p>\n',
                      type: 'Number'
                    },
                    {
                      name: 'h',
                      description: '<p>height</p>\n',
                      type: 'Number'
                    },
                    {
                      name: 'renderer',
                      description: '<p>the renderer to use, either P2D or WEBGL</p>\n',
                      type: 'Constant'
                    },
                    {
                      name: 'pInst',
                      description: '<p>pointer to p5 instance</p>\n',
                      type: 'P5',
                      optional: true
                    }
                  ]
                },
                'p5.Renderer': {
                  name: 'p5.Renderer',
                  shortname: 'p5.Renderer',
                  classitems: [],
                  plugins: [],
                  extensions: [],
                  plugin_for: [],
                  extension_for: [],
                  module: 'Rendering',
                  submodule: 'Rendering',
                  namespace: '',
                  file: 'src/core/p5.Renderer.js',
                  line: 10,
                  description:
                    '<p>Main graphics and rendering context, as well as the base API\nimplementation for p5.js &quot;core&quot;. To be used as the superclass for\nRenderer2D and Renderer3D classes, respecitvely.</p>\n',
                  is_constructor: 1,
                  extends: 'p5.Element',
                  params: [
                    {
                      name: 'elt',
                      description: '<p>DOM node that is wrapped</p>\n',
                      type: 'String'
                    },
                    {
                      name: 'pInst',
                      description: '<p>pointer to p5 instance</p>\n',
                      type: 'P5',
                      optional: true
                    },
                    {
                      name: 'isMainCanvas',
                      description: '<p>whether we&#39;re using it as main canvas</p>\n',
                      type: 'Boolean',
                      optional: true
                    }
                  ]
                },
                JSON: {
                  name: 'JSON',
                  shortname: 'JSON',
                  classitems: [],
                  plugins: [],
                  extensions: [],
                  plugin_for: [],
                  extension_for: [],
                  module: 'Foundation',
                  submodule: 'JS Method',
                  namespace: ''
                },
                console: {
                  name: 'console',
                  shortname: 'console',
                  classitems: [],
                  plugins: [],
                  extensions: [],
                  plugin_for: [],
                  extension_for: [],
                  module: 'Foundation',
                  submodule: 'JS Method',
                  namespace: ''
                },
                'p5.TypedDict': {
                  name: 'p5.TypedDict',
                  shortname: 'p5.TypedDict',
                  classitems: [],
                  plugins: [],
                  extensions: [],
                  plugin_for: [],
                  extension_for: [],
                  module: 'Data',
                  submodule: 'Dictionary',
                  namespace: '',
                  file: 'src/data/p5.TypedDict.js',
                  line: 82,
                  description:
                    '<p>Base class for all p5.Dictionary types. Specifically\n typed Dictionary classes inherit from this class.</p>\n'
                },
                'p5.StringDict': {
                  name: 'p5.StringDict',
                  shortname: 'p5.StringDict',
                  classitems: [],
                  plugins: [],
                  extensions: [],
                  plugin_for: [],
                  extension_for: [],
                  module: 'Data',
                  submodule: 'Dictionary',
                  namespace: '',
                  file: 'src/data/p5.TypedDict.js',
                  line: 399,
                  description: '<p>A simple Dictionary class for Strings.</p>\n',
                  extends: 'p5.TypedDict'
                },
                'p5.NumberDict': {
                  name: 'p5.NumberDict',
                  shortname: 'p5.NumberDict',
                  classitems: [],
                  plugins: [],
                  extensions: [],
                  plugin_for: [],
                  extension_for: [],
                  module: 'Data',
                  submodule: 'Dictionary',
                  namespace: '',
                  file: 'src/data/p5.TypedDict.js',
                  line: 416,
                  description: '<p>A simple Dictionary class for Numbers.</p>\n',
                  extends: 'p5.TypedDict'
                },
                'p5.MediaElement': {
                  name: 'p5.MediaElement',
                  shortname: 'p5.MediaElement',
                  classitems: [],
                  plugins: [],
                  extensions: [],
                  plugin_for: [],
                  extension_for: [],
                  module: 'DOM',
                  submodule: 'DOM',
                  namespace: '',
                  file: 'src/dom/dom.js',
                  line: 2185,
                  description:
                    '<p>Extends <a href="#/p5.Element">p5.Element</a> to handle audio and video. In addition to the methods\nof <a href="#/p5.Element">p5.Element</a>, it also contains methods for controlling media. It is not\ncalled directly, but <a href="#/p5.MediaElement">p5.MediaElement</a>s are created by calling <a href="#/p5/createVideo">createVideo</a>,\n<a href="#/p5/createAudio">createAudio</a>, and <a href="#/p5/createCapture">createCapture</a>.</p>\n',
                  is_constructor: 1,
                  params: [
                    {
                      name: 'elt',
                      description: '<p>DOM node that is wrapped</p>\n',
                      type: 'String'
                    }
                  ]
                },
                'p5.File': {
                  name: 'p5.File',
                  shortname: 'p5.File',
                  classitems: [],
                  plugins: [],
                  extensions: [],
                  plugin_for: [],
                  extension_for: [],
                  module: 'DOM',
                  submodule: 'DOM',
                  namespace: '',
                  file: 'src/dom/dom.js',
                  line: 3268,
                  description:
                    '<p>Base class for a file.\nUsed for Element.drop and createFileInput.</p>\n',
                  is_constructor: 1,
                  params: [
                    {
                      name: 'file',
                      description: '<p>File that is wrapped</p>\n',
                      type: 'File'
                    }
                  ]
                },
                'p5.Image': {
                  name: 'p5.Image',
                  shortname: 'p5.Image',
                  classitems: [],
                  plugins: [],
                  extensions: [],
                  plugin_for: [],
                  extension_for: [],
                  module: 'Image',
                  submodule: 'Image',
                  namespace: '',
                  file: 'src/image/p5.Image.js',
                  line: 21,
                  description:
                    '<p>Creates a new <a href="#/p5.Image">p5.Image</a>. A <a href="#/p5.Image">p5.Image</a> is a canvas backed representation of an\nimage.\n<br><br>\np5 can display .gif, .jpg and .png images. Images may be displayed\nin 2D and 3D space. Before an image is used, it must be loaded with the\n<a href="#/p5/loadImage">loadImage()</a> function. The <a href="#/p5.Image">p5.Image</a> class contains fields for the width and\nheight of the image, as well as an array called <a href="#/p5.Image/pixels">pixels[]</a> that contains the\nvalues for every pixel in the image.\n<br><br>\nThe methods described below allow easy access to the image&#39;s pixels and\nalpha channel and simplify the process of compositing.\n<br><br>\nBefore using the <a href="#/p5.Image/pixels">pixels[]</a> array, be sure to use the <a href="#/p5.Image/loadPixels">loadPixels()</a> method on\nthe image to make sure that the pixel data is properly loaded.</p>\n',
                  example: [
                    '\n<div><code>\nfunction setup() {\n  let img = createImage(100, 100); // same as new p5.Image(100, 100);\n  img.loadPixels();\n  createCanvas(100, 100);\n  background(0);\n\n  // helper for writing color to array\n  function writeColor(image, x, y, red, green, blue, alpha) {\n    let index = (x + y * width) * 4;\n    image.pixels[index] = red;\n    image.pixels[index + 1] = green;\n    image.pixels[index + 2] = blue;\n    image.pixels[index + 3] = alpha;\n  }\n\n  let x, y;\n  // fill with random colors\n  for (y = 0; y < img.height; y++) {\n    for (x = 0; x < img.width; x++) {\n      let red = random(255);\n      let green = random(255);\n      let blue = random(255);\n      let alpha = 255;\n      writeColor(img, x, y, red, green, blue, alpha);\n    }\n  }\n\n  // draw a red line\n  y = 0;\n  for (x = 0; x < img.width; x++) {\n    writeColor(img, x, y, 255, 0, 0, 255);\n  }\n\n  // draw a green line\n  y = img.height - 1;\n  for (x = 0; x < img.width; x++) {\n    writeColor(img, x, y, 0, 255, 0, 255);\n  }\n\n  img.updatePixels();\n  image(img, 0, 0);\n}\n</code></div>'
                  ],
                  params: [
                    {
                      name: 'width',
                      description: '',
                      type: 'Number'
                    },
                    {
                      name: 'height',
                      description: '',
                      type: 'Number'
                    }
                  ]
                },
                'p5.PrintWriter': {
                  name: 'p5.PrintWriter',
                  shortname: 'p5.PrintWriter',
                  classitems: [],
                  plugins: [],
                  extensions: [],
                  plugin_for: [],
                  extension_for: [],
                  module: 'IO',
                  submodule: 'Output',
                  namespace: '',
                  file: 'src/io/files.js',
                  line: 1235,
                  params: [
                    {
                      name: 'filename',
                      description: '',
                      type: 'String'
                    },
                    {
                      name: 'extension',
                      description: '',
                      type: 'String',
                      optional: true
                    }
                  ]
                },
                'p5.Table': {
                  name: 'p5.Table',
                  shortname: 'p5.Table',
                  classitems: [],
                  plugins: [],
                  extensions: [],
                  plugin_for: [],
                  extension_for: [],
                  module: 'IO',
                  submodule: 'Table',
                  namespace: '',
                  file: 'src/io/p5.Table.js',
                  line: 33,
                  description:
                    '<p><a href="#/p5.Table">Table</a> objects store data with multiple rows and columns, much\nlike in a traditional spreadsheet. Tables can be generated from\nscratch, dynamically, or using data from an existing file.</p>\n',
                  is_constructor: 1,
                  params: [
                    {
                      name: 'rows',
                      description: '<p>An array of p5.TableRow objects</p>\n',
                      type: 'p5.TableRow[]',
                      optional: true
                    }
                  ]
                },
                'p5.TableRow': {
                  name: 'p5.TableRow',
                  shortname: 'p5.TableRow',
                  classitems: [],
                  plugins: [],
                  extensions: [],
                  plugin_for: [],
                  extension_for: [],
                  module: 'IO',
                  submodule: 'Table',
                  namespace: '',
                  file: 'src/io/p5.TableRow.js',
                  line: 9,
                  description:
                    '<p>A TableRow object represents a single row of data values,\nstored in columns, from a table.</p>\n<p>A Table Row contains both an ordered array, and an unordered\nJSON object.</p>\n',
                  is_constructor: 1,
                  params: [
                    {
                      name: 'str',
                      description:
                        '<p>optional: populate the row with a\n                            string of values, separated by the\n                            separator</p>\n',
                      type: 'String',
                      optional: true
                    },
                    {
                      name: 'separator',
                      description: '<p>comma separated values (csv) by default</p>\n',
                      type: 'String',
                      optional: true
                    }
                  ]
                },
                'p5.XML': {
                  name: 'p5.XML',
                  shortname: 'p5.XML',
                  classitems: [],
                  plugins: [],
                  extensions: [],
                  plugin_for: [],
                  extension_for: [],
                  module: 'IO',
                  submodule: 'Input',
                  namespace: '',
                  file: 'src/io/p5.XML.js',
                  line: 9,
                  description:
                    '<p>XML is a representation of an XML object, able to parse XML code. Use\n<a href="#/p5/loadXML">loadXML()</a> to load external XML files and create XML objects.</p>\n',
                  is_constructor: 1,
                  example: [
                    '\n<div class=\'norender\'><code>\n// The following short XML file called "mammals.xml" is parsed\n// in the code below.\n//\n// <?xml version="1.0"?>\n// &lt;mammals&gt;\n//   &lt;animal id="0" species="Capra hircus">Goat&lt;/animal&gt;\n//   &lt;animal id="1" species="Panthera pardus">Leopard&lt;/animal&gt;\n//   &lt;animal id="2" species="Equus zebra">Zebra&lt;/animal&gt;\n// &lt;/mammals&gt;\n\nlet xml;\n\nfunction preload() {\n  xml = loadXML(\'assets/mammals.xml\');\n}\n\nfunction setup() {\n  let children = xml.getChildren(\'animal\');\n\n  for (let i = 0; i < children.length; i++) {\n    let id = children[i].getNum(\'id\');\n    let coloring = children[i].getString(\'species\');\n    let name = children[i].getContent();\n    print(id + \', \' + coloring + \', \' + name);\n  }\n}\n\n// Sketch prints:\n// 0, Capra hircus, Goat\n// 1, Panthera pardus, Leopard\n// 2, Equus zebra, Zebra\n</code></div>'
                  ],
                  alt: 'no image displayed'
                },
                'p5.Vector': {
                  name: 'p5.Vector',
                  shortname: 'p5.Vector',
                  classitems: [],
                  plugins: [],
                  extensions: [],
                  plugin_for: [],
                  extension_for: [],
                  module: 'Math',
                  submodule: 'Vector',
                  namespace: '',
                  file: 'src/math/p5.Vector.js',
                  line: 10,
                  description:
                    '<p>A class to describe a two or three dimensional vector, specifically\na Euclidean (also known as geometric) vector. A vector is an entity\nthat has both magnitude and direction. The datatype, however, stores\nthe components of the vector (x, y for 2D, and x, y, z for 3D). The magnitude\nand direction can be accessed via the methods <a href="#/p5/mag">mag()</a> and <a href="#/p5/heading">heading()</a>.\n<br><br>\nIn many of the p5.js examples, you will see <a href="#/p5.Vector">p5.Vector</a> used to describe a\nposition, velocity, or acceleration. For example, if you consider a rectangle\nmoving across the screen, at any given instant it has a position (a vector\nthat points from the origin to its location), a velocity (the rate at which\nthe object&#39;s position changes per time unit, expressed as a vector), and\nacceleration (the rate at which the object&#39;s velocity changes per time\nunit, expressed as a vector).\n<br><br>\nSince vectors represent groupings of values, we cannot simply use\ntraditional addition/multiplication/etc. Instead, we&#39;ll need to do some\n&quot;vector&quot; math, which is made easy by the methods inside the <a href="#/p5.Vector">p5.Vector</a> class.</p>\n',
                  params: [
                    {
                      name: 'x',
                      description: '<p>x component of the vector</p>\n',
                      type: 'Number',
                      optional: true
                    },
                    {
                      name: 'y',
                      description: '<p>y component of the vector</p>\n',
                      type: 'Number',
                      optional: true
                    },
                    {
                      name: 'z',
                      description: '<p>z component of the vector</p>\n',
                      type: 'Number',
                      optional: true
                    }
                  ],
                  example: [
                    '\n<div>\n<code>\nlet v1 = createVector(40, 50);\nlet v2 = createVector(40, 50);\n\nellipse(v1.x, v1.y, 50, 50);\nellipse(v2.x, v2.y, 50, 50);\nv1.add(v2);\nellipse(v1.x, v1.y, 50, 50);\n</code>\n</div>'
                  ],
                  alt:
                    '2 white ellipses. One center-left the other bottom right and off canvas'
                },
                'p5.Font': {
                  name: 'p5.Font',
                  shortname: 'p5.Font',
                  classitems: [],
                  plugins: [],
                  extensions: [],
                  plugin_for: [],
                  extension_for: [],
                  module: 'Typography',
                  submodule: 'Loading & Displaying',
                  namespace: '',
                  file: 'src/typography/p5.Font.js',
                  line: 13,
                  description: '<p>Base class for font handling</p>\n',
                  params: [
                    {
                      name: 'pInst',
                      description: '<p>pointer to p5 instance</p>\n',
                      type: 'P5',
                      optional: true
                    }
                  ]
                },
                'p5.Camera': {
                  name: 'p5.Camera',
                  shortname: 'p5.Camera',
                  classitems: [],
                  plugins: [],
                  extensions: [],
                  plugin_for: [],
                  extension_for: [],
                  module: 'Lights, Camera',
                  submodule: 'Camera',
                  namespace: '',
                  file: 'src/webgl/p5.Camera.js',
                  line: 319,
                  description:
                    '<p>This class describes a camera for use in p5&#39;s\n<a href="https://github.com/processing/p5.js/wiki/Getting-started-with-WebGL-in-p5">\nWebGL mode</a>. It contains camera position, orientation, and projection\ninformation necessary for rendering a 3D scene.</p>\n<p>New p5.Camera objects can be made through the\n<a href="#/p5/createCamera">createCamera()</a> function and controlled through\nthe methods described below. A camera created in this way will use a default\nposition in the scene and a default perspective projection until these\nproperties are changed through the various methods available. It is possible\nto create multiple cameras, in which case the current camera\ncan be set through the <a href="#/p5/setCamera">setCamera()</a> method.</p>\n<p>Note:\nThe methods below operate in two coordinate systems: the &#39;world&#39; coordinate\nsystem describe positions in terms of their relationship to the origin along\nthe X, Y and Z axes whereas the camera&#39;s &#39;local&#39; coordinate system\ndescribes positions from the camera&#39;s point of view: left-right, up-down,\nand forward-backward. The <a href="#/p5.Camera/move">move()</a> method,\nfor instance, moves the camera along its own axes, whereas the\n<a href="#/p5.Camera/setPosition">setPosition()</a>\nmethod sets the camera&#39;s position in world-space.</p>\n',
                  params: [
                    {
                      name: 'rendererGL',
                      description: '<p>instance of WebGL renderer</p>\n',
                      type: 'RendererGL'
                    }
                  ],
                  example: [
                    "\n<div>\n<code>\nlet cam;\nlet delta = 0.01;\n\nfunction setup() {\n  createCanvas(100, 100, WEBGL);\n  normalMaterial();\n  cam = createCamera();\n  // set initial pan angle\n  cam.pan(-0.8);\n}\n\nfunction draw() {\n  background(200);\n\n  // pan camera according to angle 'delta'\n  cam.pan(delta);\n\n  // every 160 frames, switch direction\n  if (frameCount % 160 === 0) {\n    delta *= -1;\n  }\n\n  rotateX(frameCount * 0.01);\n  translate(-100, 0, 0);\n  box(20);\n  translate(35, 0, 0);\n  box(20);\n  translate(35, 0, 0);\n  box(20);\n  translate(35, 0, 0);\n  box(20);\n  translate(35, 0, 0);\n  box(20);\n  translate(35, 0, 0);\n  box(20);\n  translate(35, 0, 0);\n  box(20);\n}\n</code>\n</div>"
                  ],
                  alt: 'camera view pans left and right across a series of rotating 3D boxes.'
                },
                'p5.Geometry': {
                  name: 'p5.Geometry',
                  shortname: 'p5.Geometry',
                  classitems: [],
                  plugins: [],
                  extensions: [],
                  plugin_for: [],
                  extension_for: [],
                  module: 'Lights, Camera',
                  submodule: 'Material',
                  namespace: '',
                  file: 'src/webgl/p5.Geometry.js',
                  line: 12,
                  description: '<p>p5 Geometry class</p>\n',
                  is_constructor: 1,
                  params: [
                    {
                      name: 'detailX',
                      description: '<p>number of vertices on horizontal surface</p>\n',
                      type: 'Integer',
                      optional: true
                    },
                    {
                      name: 'detailY',
                      description: '<p>number of vertices on horizontal surface</p>\n',
                      type: 'Integer',
                      optional: true
                    },
                    {
                      name: 'callback',
                      description: '<p>function to call upon object instantiation.</p>\n',
                      type: 'Function',
                      optional: true
                    }
                  ]
                },
                'p5.Shader': {
                  name: 'p5.Shader',
                  shortname: 'p5.Shader',
                  classitems: [],
                  plugins: [],
                  extensions: [],
                  plugin_for: [],
                  extension_for: [],
                  module: 'Lights, Camera',
                  submodule: 'Material',
                  namespace: '',
                  file: 'src/webgl/p5.Shader.js',
                  line: 11,
                  description: '<p>Shader class for WEBGL Mode</p>\n',
                  params: [
                    {
                      name: 'renderer',
                      description:
                        '<p>an instance of p5.RendererGL that\nwill provide the GL context for this new p5.Shader</p>\n',
                      type: 'p5.RendererGL'
                    },
                    {
                      name: 'vertSrc',
                      description: '<p>source code for the vertex shader (as a string)</p>\n',
                      type: 'String'
                    },
                    {
                      name: 'fragSrc',
                      description:
                        '<p>source code for the fragment shader (as a string)</p>\n',
                      type: 'String'
                    }
                  ]
                },
                'p5.sound': {
                  name: 'p5.sound',
                  shortname: 'p5.sound',
                  classitems: [],
                  plugins: [],
                  extensions: [],
                  plugin_for: [],
                  extension_for: [],
                  module: 'p5.sound',
                  submodule: 'p5.sound',
                  namespace: ''
                },
                'p5.SoundFile': {
                  name: 'p5.SoundFile',
                  shortname: 'p5.SoundFile',
                  classitems: [],
                  plugins: [],
                  extensions: [],
                  plugin_for: [],
                  extension_for: [],
                  module: 'p5.sound',
                  submodule: 'p5.sound',
                  namespace: '',
                  file: 'lib/addons/p5.sound.js',
                  line: 1645,
                  description:
                    '<p>SoundFile object with a path to a file.</p>\n\n<p>The p5.SoundFile may not be available immediately because\nit loads the file information asynchronously.</p>\n\n<p>To do something with the sound as soon as it loads\npass the name of a function as the second parameter.</p>\n\n<p>Only one file path is required. However, audio file formats\n(i.e. mp3, ogg, wav and m4a/aac) are not supported by all\nweb browsers. If you want to ensure compatability, instead of a single\nfile path, you may include an Array of filepaths, and the browser will\nchoose a format that works.</p>',
                  is_constructor: 1,
                  params: [
                    {
                      name: 'path',
                      description:
                        '<p>path to a sound file (String). Optionally,\n                             you may include multiple file formats in\n                             an array. Alternately, accepts an object\n                             from the HTML5 File API, or a p5.File.</p>\n',
                      type: 'String|Array'
                    },
                    {
                      name: 'successCallback',
                      description: '<p>Name of a function to call once file loads</p>\n',
                      type: 'Function',
                      optional: true
                    },
                    {
                      name: 'errorCallback',
                      description:
                        '<p>Name of a function to call if file fails to\n                                    load. This function will receive an error or\n                                   XMLHttpRequest object with information\n                                   about what went wrong.</p>\n',
                      type: 'Function',
                      optional: true
                    },
                    {
                      name: 'whileLoadingCallback',
                      description:
                        '<p>Name of a function to call while file\n                                           is loading. That function will\n                                           receive progress of the request to\n                                           load the sound file\n                                           (between 0 and 1) as its first\n                                           parameter. This progress\n                                           does not account for the additional\n                                           time needed to decode the audio data.</p>\n',
                      type: 'Function',
                      optional: true
                    }
                  ],
                  example: [
                    "\n<div><code>\n\nfunction preload() {\n  soundFormats('mp3', 'ogg');\n  mySound = loadSound('assets/doorbell.mp3');\n}\n\nfunction setup() {\n  mySound.setVolume(0.1);\n  mySound.play();\n}\n\n </code></div>"
                  ]
                },
                'p5.Amplitude': {
                  name: 'p5.Amplitude',
                  shortname: 'p5.Amplitude',
                  classitems: [],
                  plugins: [],
                  extensions: [],
                  plugin_for: [],
                  extension_for: [],
                  module: 'p5.sound',
                  submodule: 'p5.sound',
                  namespace: '',
                  file: 'lib/addons/p5.sound.js',
                  line: 3179,
                  description:
                    '<p>Amplitude measures volume between 0.0 and 1.0.\nListens to all p5sound by default, or use setInput()\nto listen to a specific sound source. Accepts an optional\nsmoothing value, which defaults to 0.</p>\n',
                  is_constructor: 1,
                  params: [
                    {
                      name: 'smoothing',
                      description:
                        '<p>between 0.0 and .999 to smooth\n                           amplitude readings (defaults to 0)</p>\n',
                      type: 'Number',
                      optional: true
                    }
                  ],
                  example: [
                    "\n<div><code>\nlet sound, amplitude, cnv;\n\nfunction preload(){\n  sound = loadSound('assets/beat.mp3');\n}\nfunction setup() {\n  cnv = createCanvas(100,100);\n  amplitude = new p5.Amplitude();\n\n  // start / stop the sound when canvas is clicked\n  cnv.mouseClicked(function() {\n    if (sound.isPlaying() ){\n      sound.stop();\n    } else {\n      sound.play();\n    }\n  });\n}\nfunction draw() {\n  background(0);\n  fill(255);\n  let level = amplitude.getLevel();\n  let size = map(level, 0, 1, 0, 200);\n  ellipse(width/2, height/2, size, size);\n}\n\n</code></div>"
                  ]
                },
                'p5.FFT': {
                  name: 'p5.FFT',
                  shortname: 'p5.FFT',
                  classitems: [],
                  plugins: [],
                  extensions: [],
                  plugin_for: [],
                  extension_for: [],
                  module: 'p5.sound',
                  submodule: 'p5.sound',
                  namespace: '',
                  file: 'lib/addons/p5.sound.js',
                  line: 3458,
                  description:
                    '<p>FFT (Fast Fourier Transform) is an analysis algorithm that\nisolates individual\n<a href="https://en.wikipedia.org/wiki/Audio_frequency">\naudio frequencies</a> within a waveform.</p>\n\n<p>Once instantiated, a p5.FFT object can return an array based on\ntwo types of analyses: <br> ??? <code>FFT.waveform()</code> computes\namplitude values along the time domain. The array indices correspond\nto samples across a brief moment in time. Each value represents\namplitude of the waveform at that sample of time.<br>\n??? <code>FFT.analyze() </code> computes amplitude values along the\nfrequency domain. The array indices correspond to frequencies (i.e.\npitches), from the lowest to the highest that humans can hear. Each\nvalue represents amplitude at that slice of the frequency spectrum.\nUse with <code>getEnergy()</code> to measure amplitude at specific\nfrequencies, or within a range of frequencies. </p>\n\n<p>FFT analyzes a very short snapshot of sound called a sample\nbuffer. It returns an array of amplitude measurements, referred\nto as <code>bins</code>. The array is 1024 bins long by default.\nYou can change the bin array length, but it must be a power of 2\nbetween 16 and 1024 in order for the FFT algorithm to function\ncorrectly. The actual size of the FFT buffer is twice the\nnumber of bins, so given a standard sample rate, the buffer is\n2048/44100 seconds long.</p>',
                  is_constructor: 1,
                  params: [
                    {
                      name: 'smoothing',
                      description:
                        '<p>Smooth results of Freq Spectrum.\n                              0.0 &lt; smoothing &lt; 1.0.\n                              Defaults to 0.8.</p>\n',
                      type: 'Number',
                      optional: true
                    },
                    {
                      name: 'bins',
                      description:
                        '<p>Length of resulting array.\n                          Must be a power of two between\n                          16 and 1024. Defaults to 1024.</p>\n',
                      type: 'Number',
                      optional: true
                    }
                  ],
                  example: [
                    "\n<div><code>\nfunction preload(){\n  sound = loadSound('assets/Damscray_DancingTiger.mp3');\n}\n\nfunction setup(){\n  let cnv = createCanvas(100,100);\n  cnv.mouseClicked(togglePlay);\n  fft = new p5.FFT();\n  sound.amp(0.2);\n}\n\nfunction draw(){\n  background(0);\n\n  let spectrum = fft.analyze();\n  noStroke();\n  fill(0,255,0); // spectrum is green\n  for (var i = 0; i< spectrum.length; i++){\n    let x = map(i, 0, spectrum.length, 0, width);\n    let h = -height + map(spectrum[i], 0, 255, height, 0);\n    rect(x, height, width / spectrum.length, h )\n  }\n\n  let waveform = fft.waveform();\n  noFill();\n  beginShape();\n  stroke(255,0,0); // waveform is red\n  strokeWeight(1);\n  for (var i = 0; i< waveform.length; i++){\n    let x = map(i, 0, waveform.length, 0, width);\n    let y = map( waveform[i], -1, 1, 0, height);\n    vertex(x,y);\n  }\n  endShape();\n\n  text('click to play/pause', 4, 10);\n}\n\n// fade sound if mouse is over canvas\nfunction togglePlay() {\n  if (sound.isPlaying()) {\n    sound.pause();\n  } else {\n    sound.loop();\n  }\n}\n</code></div>"
                  ]
                },
                'p5.Signal': {
                  name: 'p5.Signal',
                  shortname: 'p5.Signal',
                  classitems: [],
                  plugins: [],
                  extensions: [],
                  plugin_for: [],
                  extension_for: [],
                  module: 'p5.sound',
                  submodule: 'p5.sound',
                  namespace: '',
                  file: 'lib/addons/p5.sound.js',
                  line: 5223,
                  description:
                    "<p>p5.Signal is a constant audio-rate signal used by p5.Oscillator\nand p5.Envelope for modulation math.</p>\n\n<p>This is necessary because Web Audio is processed on a seprate clock.\nFor example, the p5 draw loop runs about 60 times per second. But\nthe audio clock must process samples 44100 times per second. If we\nwant to add a value to each of those samples, we can't do it in the\ndraw loop, but we can do it by adding a constant-rate audio signal.</p.\n\n<p>This class mostly functions behind the scenes in p5.sound, and returns\na Tone.Signal from the Tone.js library by Yotam Mann.\nIf you want to work directly with audio signals for modular\nsynthesis, check out\n<a href='http://bit.ly/1oIoEng' target=_'blank'>tone.js.</a></p>",
                  is_constructor: 1,
                  return: {
                    description: 'A Signal object from the Tone.js library',
                    type: 'Tone.Signal'
                  },
                  example: [
                    "\n<div><code>\nfunction setup() {\n  carrier = new p5.Oscillator('sine');\n  carrier.amp(1); // set amplitude\n  carrier.freq(220); // set frequency\n  carrier.start(); // start oscillating\n\n  modulator = new p5.Oscillator('sawtooth');\n  modulator.disconnect();\n  modulator.amp(1);\n  modulator.freq(4);\n  modulator.start();\n\n  // Modulator's default amplitude range is -1 to 1.\n  // Multiply it by -200, so the range is -200 to 200\n  // then add 220 so the range is 20 to 420\n  carrier.freq( modulator.mult(-200).add(220) );\n}\n</code></div>"
                  ]
                },
                'p5.Oscillator': {
                  name: 'p5.Oscillator',
                  shortname: 'p5.Oscillator',
                  classitems: [],
                  plugins: [],
                  extensions: [],
                  plugin_for: [],
                  extension_for: [],
                  module: 'p5.sound',
                  submodule: 'p5.sound',
                  namespace: '',
                  file: 'lib/addons/p5.sound.js',
                  line: 5369,
                  description:
                    "<p>Creates a signal that oscillates between -1.0 and 1.0.\nBy default, the oscillation takes the form of a sinusoidal\nshape ('sine'). Additional types include 'triangle',\n'sawtooth' and 'square'. The frequency defaults to\n440 oscillations per second (440Hz, equal to the pitch of an\n'A' note).</p>\n\n<p>Set the type of oscillation with setType(), or by instantiating a\nspecific oscillator: <a href=\"/reference/#/p5.SinOsc\">p5.SinOsc</a>, <a\nhref=\"/reference/#/p5.TriOsc\">p5.TriOsc</a>, <a\nhref=\"/reference/#/p5.SqrOsc\">p5.SqrOsc</a>, or <a\nhref=\"/reference/#/p5.SawOsc\">p5.SawOsc</a>.\n</p>",
                  is_constructor: 1,
                  params: [
                    {
                      name: 'freq',
                      description: '<p>frequency defaults to 440Hz</p>\n',
                      type: 'Number',
                      optional: true
                    },
                    {
                      name: 'type',
                      description:
                        '<p>type of oscillator. Options:\n                       &#39;sine&#39; (default), &#39;triangle&#39;,\n                       &#39;sawtooth&#39;, &#39;square&#39;</p>\n',
                      type: 'String',
                      optional: true
                    }
                  ],
                  example: [
                    "\n<div><code>\nlet osc;\nlet playing = false;\n\nfunction setup() {\n  backgroundColor = color(255,0,255);\n  textAlign(CENTER);\n\n  osc = new p5.Oscillator();\n  osc.setType('sine');\n  osc.freq(240);\n  osc.amp(0);\n  osc.start();\n}\n\nfunction draw() {\n  background(backgroundColor)\n  text('click to play', width/2, height/2);\n}\n\nfunction mouseClicked() {\n  if (mouseX > 0 && mouseX < width && mouseY < height && mouseY > 0) {\n    if (!playing) {\n      // ramp amplitude to 0.5 over 0.05 seconds\n      osc.amp(0.5, 0.05);\n      playing = true;\n      backgroundColor = color(0,255,255);\n    } else {\n      // ramp amplitude to 0 over 0.5 seconds\n      osc.amp(0, 0.5);\n      playing = false;\n      backgroundColor = color(255,0,255);\n    }\n  }\n}\n</code> </div>"
                  ]
                },
                'p5.SinOsc': {
                  name: 'p5.SinOsc',
                  shortname: 'p5.SinOsc',
                  classitems: [],
                  plugins: [],
                  extensions: [],
                  plugin_for: [],
                  extension_for: [],
                  module: 'p5.sound',
                  submodule: 'p5.sound',
                  namespace: '',
                  file: 'lib/addons/p5.sound.js',
                  line: 5810,
                  description:
                    "<p>Constructor: <code>new p5.SinOsc()</code>.\nThis creates a Sine Wave Oscillator and is\nequivalent to <code> new p5.Oscillator('sine')\n</code> or creating a p5.Oscillator and then calling\nits method <code>setType('sine')</code>.\nSee p5.Oscillator for methods.</p>\n",
                  is_constructor: 1,
                  extends: 'p5.Oscillator',
                  params: [
                    {
                      name: 'freq',
                      description: '<p>Set the frequency</p>\n',
                      type: 'Number',
                      optional: true
                    }
                  ]
                },
                'p5.TriOsc': {
                  name: 'p5.TriOsc',
                  shortname: 'p5.TriOsc',
                  classitems: [],
                  plugins: [],
                  extensions: [],
                  plugin_for: [],
                  extension_for: [],
                  module: 'p5.sound',
                  submodule: 'p5.sound',
                  namespace: '',
                  file: 'lib/addons/p5.sound.js',
                  line: 5827,
                  description:
                    "<p>Constructor: <code>new p5.TriOsc()</code>.\nThis creates a Triangle Wave Oscillator and is\nequivalent to <code>new p5.Oscillator('triangle')\n</code> or creating a p5.Oscillator and then calling\nits method <code>setType('triangle')</code>.\nSee p5.Oscillator for methods.</p>\n",
                  is_constructor: 1,
                  extends: 'p5.Oscillator',
                  params: [
                    {
                      name: 'freq',
                      description: '<p>Set the frequency</p>\n',
                      type: 'Number',
                      optional: true
                    }
                  ]
                },
                'p5.SawOsc': {
                  name: 'p5.SawOsc',
                  shortname: 'p5.SawOsc',
                  classitems: [],
                  plugins: [],
                  extensions: [],
                  plugin_for: [],
                  extension_for: [],
                  module: 'p5.sound',
                  submodule: 'p5.sound',
                  namespace: '',
                  file: 'lib/addons/p5.sound.js',
                  line: 5844,
                  description:
                    "<p>Constructor: <code>new p5.SawOsc()</code>.\nThis creates a SawTooth Wave Oscillator and is\nequivalent to <code> new p5.Oscillator('sawtooth')\n</code> or creating a p5.Oscillator and then calling\nits method <code>setType('sawtooth')</code>.\nSee p5.Oscillator for methods.</p>\n",
                  is_constructor: 1,
                  extends: 'p5.Oscillator',
                  params: [
                    {
                      name: 'freq',
                      description: '<p>Set the frequency</p>\n',
                      type: 'Number',
                      optional: true
                    }
                  ]
                },
                'p5.SqrOsc': {
                  name: 'p5.SqrOsc',
                  shortname: 'p5.SqrOsc',
                  classitems: [],
                  plugins: [],
                  extensions: [],
                  plugin_for: [],
                  extension_for: [],
                  module: 'p5.sound',
                  submodule: 'p5.sound',
                  namespace: '',
                  file: 'lib/addons/p5.sound.js',
                  line: 5861,
                  description:
                    "<p>Constructor: <code>new p5.SqrOsc()</code>.\nThis creates a Square Wave Oscillator and is\nequivalent to <code> new p5.Oscillator('square')\n</code> or creating a p5.Oscillator and then calling\nits method <code>setType('square')</code>.\nSee p5.Oscillator for methods.</p>\n",
                  is_constructor: 1,
                  extends: 'p5.Oscillator',
                  params: [
                    {
                      name: 'freq',
                      description: '<p>Set the frequency</p>\n',
                      type: 'Number',
                      optional: true
                    }
                  ]
                },
                'p5.Envelope': {
                  name: 'p5.Envelope',
                  shortname: 'p5.Envelope',
                  classitems: [],
                  plugins: [],
                  extensions: [],
                  plugin_for: [],
                  extension_for: [],
                  module: 'p5.sound',
                  submodule: 'p5.sound',
                  namespace: '',
                  file: 'lib/addons/p5.sound.js',
                  line: 6316,
                  description:
                    '<p>Envelopes are pre-defined amplitude distribution over time.\nTypically, envelopes are used to control the output volume\nof an object, a series of fades referred to as Attack, Decay,\nSustain and Release (\n<a href="https://upload.wikimedia.org/wikipedia/commons/e/ea/ADSR_parameter.svg">ADSR</a>\n). Envelopes can also control other Web Audio Parameters???for example, a p5.Envelope can\ncontrol an Oscillator\'s frequency like this: <code>osc.freq(env)</code>.</p>\n<p>Use <code><a href="#/p5.Envelope/setRange">setRange</a></code> to change the attack/release level.\nUse <code><a href="#/p5.Envelope/setADSR">setADSR</a></code> to change attackTime, decayTime, sustainPercent and releaseTime.</p>\n<p>Use the <code><a href="#/p5.Envelope/play">play</a></code> method to play the entire envelope,\nthe <code><a href="#/p5.Envelope/ramp">ramp</a></code> method for a pingable trigger,\nor <code><a href="#/p5.Envelope/triggerAttack">triggerAttack</a></code>/\n<code><a href="#/p5.Envelope/triggerRelease">triggerRelease</a></code> to trigger noteOn/noteOff.</p>',
                  is_constructor: 1,
                  example: [
                    "\n<div><code>\nlet attackLevel = 1.0;\nlet releaseLevel = 0;\n\nlet attackTime = 0.001;\nlet decayTime = 0.2;\nlet susPercent = 0.2;\nlet releaseTime = 0.5;\n\nlet env, triOsc;\n\nfunction setup() {\n  let cnv = createCanvas(100, 100);\n\n  textAlign(CENTER);\n  text('click to play', width/2, height/2);\n\n  env = new p5.Envelope();\n  env.setADSR(attackTime, decayTime, susPercent, releaseTime);\n  env.setRange(attackLevel, releaseLevel);\n\n  triOsc = new p5.Oscillator('triangle');\n  triOsc.amp(env);\n  triOsc.start();\n  triOsc.freq(220);\n\n  cnv.mousePressed(playEnv);\n}\n\nfunction playEnv()  {\n  env.play();\n}\n</code></div>"
                  ]
                },
                'p5.Pulse': {
                  name: 'p5.Pulse',
                  shortname: 'p5.Pulse',
                  classitems: [],
                  plugins: [],
                  extensions: [],
                  plugin_for: [],
                  extension_for: [],
                  module: 'p5.sound',
                  submodule: 'p5.sound',
                  namespace: '',
                  file: 'lib/addons/p5.sound.js',
                  line: 7114,
                  description:
                    '<p>Creates a Pulse object, an oscillator that implements\nPulse Width Modulation.\nThe pulse is created with two oscillators.\nAccepts a parameter for frequency, and to set the\nwidth between the pulses. See <a href="\nhttp://p5js.org/reference/#/p5.Oscillator">\n<code>p5.Oscillator</code> for a full list of methods.</p>\n',
                  extends: 'p5.Oscillator',
                  is_constructor: 1,
                  params: [
                    {
                      name: 'freq',
                      description: '<p>Frequency in oscillations per second (Hz)</p>\n',
                      type: 'Number',
                      optional: true
                    },
                    {
                      name: 'w',
                      description:
                        '<p>Width between the pulses (0 to 1.0,\n                       defaults to 0)</p>\n',
                      type: 'Number',
                      optional: true
                    }
                  ],
                  example: [
                    '\n<div><code>\nlet pulse;\nfunction setup() {\n  background(0);\n\n  // Create and start the pulse wave oscillator\n  pulse = new p5.Pulse();\n  pulse.amp(0.5);\n  pulse.freq(220);\n  pulse.start();\n}\n\nfunction draw() {\n  let w = map(mouseX, 0, width, 0, 1);\n  w = constrain(w, 0, 1);\n  pulse.width(w)\n}\n</code></div>'
                  ]
                },
                'p5.Noise': {
                  name: 'p5.Noise',
                  shortname: 'p5.Noise',
                  classitems: [],
                  plugins: [],
                  extensions: [],
                  plugin_for: [],
                  extension_for: [],
                  module: 'p5.sound',
                  submodule: 'p5.sound',
                  namespace: '',
                  file: 'lib/addons/p5.sound.js',
                  line: 7293,
                  description:
                    '<p>Noise is a type of oscillator that generates a buffer with random values.</p>\n',
                  extends: 'p5.Oscillator',
                  is_constructor: 1,
                  params: [
                    {
                      name: 'type',
                      description:
                        '<p>Type of noise can be &#39;white&#39; (default),\n                     &#39;brown&#39; or &#39;pink&#39;.</p>\n',
                      type: 'String'
                    }
                  ]
                },
                'p5.AudioIn': {
                  name: 'p5.AudioIn',
                  shortname: 'p5.AudioIn',
                  classitems: [],
                  plugins: [],
                  extensions: [],
                  plugin_for: [],
                  extension_for: [],
                  module: 'p5.sound',
                  submodule: 'p5.sound',
                  namespace: '',
                  file: 'lib/addons/p5.sound.js',
                  line: 7441,
                  description:
                    '<p>Get audio from an input, i.e. your computer\'s microphone.</p>\n\n<p>Turn the mic on/off with the start() and stop() methods. When the mic\nis on, its volume can be measured with getLevel or by connecting an\nFFT object.</p>\n\n<p>If you want to hear the AudioIn, use the .connect() method.\nAudioIn does not connect to p5.sound output by default to prevent\nfeedback.</p>\n\n<p><em>Note: This uses the <a href="http://caniuse.com/stream">getUserMedia/\nStream</a> API, which is not supported by certain browsers. Access in Chrome browser\nis limited to localhost and https, but access over http may be limited.</em></p>',
                  is_constructor: 1,
                  params: [
                    {
                      name: 'errorCallback',
                      description:
                        '<p>A function to call if there is an error\n                                  accessing the AudioIn. For example,\n                                  Safari and iOS devices do not\n                                  currently allow microphone access.</p>\n',
                      type: 'Function',
                      optional: true
                    }
                  ],
                  example: [
                    '\n<div><code>\nlet mic;\nfunction setup(){\n  mic = new p5.AudioIn()\n  mic.start();\n}\nfunction draw(){\n  background(0);\n  micLevel = mic.getLevel();\n  ellipse(width/2, constrain(height-micLevel*height*5, 0, height), 10, 10);\n}\n</code></div>'
                  ]
                },
                'p5.Effect': {
                  name: 'p5.Effect',
                  shortname: 'p5.Effect',
                  classitems: [],
                  plugins: [],
                  extensions: [],
                  plugin_for: [],
                  extension_for: [],
                  module: 'p5.sound',
                  submodule: 'p5.sound',
                  namespace: '',
                  file: 'lib/addons/p5.sound.js',
                  line: 8357,
                  description:
                    '<p>Effect is a base class for audio effects in p5. <br>\nThis module handles the nodes and methods that are \ncommon and useful for current and future effects.</p>\n<p>This class is extended by <a href="/reference/#/p5.Distortion">p5.Distortion</a>, \n<a href="/reference/#/p5.Compressor">p5.Compressor</a>,\n<a href="/reference/#/p5.Delay">p5.Delay</a>, \n<a href="/reference/#/p5.Filter">p5.Filter</a>, \n<a href="/reference/#/p5.Reverb">p5.Reverb</a>.</p>\n',
                  is_constructor: 1,
                  params: [
                    {
                      name: 'ac',
                      description: '<p>Reference to the audio context of the p5 object</p>\n',
                      type: 'Object',
                      optional: true
                    },
                    {
                      name: 'input',
                      description: '<p>Gain Node effect wrapper</p>\n',
                      type: 'AudioNode',
                      optional: true
                    },
                    {
                      name: 'output',
                      description: '<p>Gain Node effect wrapper</p>\n',
                      type: 'AudioNode',
                      optional: true
                    },
                    {
                      name: '_drywet',
                      description: '<p>Tone.JS CrossFade node (defaults to value: 1)</p>\n',
                      type: 'Object',
                      optional: true
                    },
                    {
                      name: 'wet',
                      description:
                        '<p>Effects that extend this class should connect\n                             to the wet signal to this gain node, so that dry and wet \n                             signals are mixed properly.</p>\n',
                      type: 'AudioNode',
                      optional: true
                    }
                  ]
                },
                'p5.Filter': {
                  name: 'p5.Filter',
                  shortname: 'p5.Filter',
                  classitems: [],
                  plugins: [],
                  extensions: [],
                  plugin_for: [],
                  extension_for: [],
                  module: 'p5.sound',
                  submodule: 'p5.sound',
                  namespace: '',
                  file: 'lib/addons/p5.sound.js',
                  line: 8499,
                  description:
                    '<p>A p5.Filter uses a Web Audio Biquad Filter to filter\nthe frequency response of an input source. Subclasses\ninclude:</p>\n* <a href="/reference/#/p5.LowPass"><code>p5.LowPass</code></a>:\nAllows frequencies below the cutoff frequency to pass through,\nand attenuates frequencies above the cutoff.<br/>\n* <a href="/reference/#/p5.HighPass"><code>p5.HighPass</code></a>:\nThe opposite of a lowpass filter. <br/>\n* <a href="/reference/#/p5.BandPass"><code>p5.BandPass</code></a>:\nAllows a range of frequencies to pass through and attenuates\nthe frequencies below and above this frequency range.<br/>\n\n<p>The <code>.res()</code> method controls either width of the\nbandpass, or resonance of the low/highpass cutoff frequency.</p>\n<p>This class extends <a href = "/reference/#/p5.Effect">p5.Effect</a>.  \nMethods <a href = "/reference/#/p5.Effect/amp">amp()</a>, <a href = "/reference/#/p5.Effect/chain">chain()</a>, \n<a href = "/reference/#/p5.Effect/drywet">drywet()</a>, <a href = "/reference/#/p5.Effect/connect">connect()</a>, and \n<a href = "/reference/#/p5.Effect/disconnect">disconnect()</a> are available.</p>\n',
                  extends: 'p5.Effect',
                  is_constructor: 1,
                  params: [
                    {
                      name: 'type',
                      description:
                        '<p>&#39;lowpass&#39; (default), &#39;highpass&#39;, &#39;bandpass&#39;</p>\n',
                      type: 'String',
                      optional: true
                    }
                  ],
                  example: [
                    '\n<div><code>\nlet fft, noise, filter;\n\nfunction setup() {\n  fill(255, 40, 255);\n\n  filter = new p5.BandPass();\n\n  noise = new p5.Noise();\n  // disconnect unfiltered noise,\n  // and connect to filter\n  noise.disconnect();\n  noise.connect(filter);\n  noise.start();\n\n  fft = new p5.FFT();\n}\n\nfunction draw() {\n  background(30);\n\n  // set the BandPass frequency based on mouseX\n  let freq = map(mouseX, 0, width, 20, 10000);\n  filter.freq(freq);\n  // give the filter a narrow band (lower res = wider bandpass)\n  filter.res(50);\n\n  // draw filtered spectrum\n  let spectrum = fft.analyze();\n  noStroke();\n  for (let i = 0; i < spectrum.length; i++) {\n    let x = map(i, 0, spectrum.length, 0, width);\n    let h = -height + map(spectrum[i], 0, 255, height, 0);\n    rect(x, height, width/spectrum.length, h);\n  }\n\n  isMouseOverCanvas();\n}\n\nfunction isMouseOverCanvas() {\n  let mX = mouseX, mY = mouseY;\n  if (mX > 0 && mX < width && mY < height && mY > 0) {\n    noise.amp(0.5, 0.2);\n  } else {\n    noise.amp(0, 0.2);\n  }\n}\n</code></div>'
                  ]
                },
                'p5.LowPass': {
                  name: 'p5.LowPass',
                  shortname: 'p5.LowPass',
                  classitems: [],
                  plugins: [],
                  extensions: [],
                  plugin_for: [],
                  extension_for: [],
                  module: 'p5.sound',
                  submodule: 'p5.sound',
                  namespace: '',
                  file: 'lib/addons/p5.sound.js',
                  line: 8730,
                  description:
                    "<p>Constructor: <code>new p5.LowPass()</code> Filter.\nThis is the same as creating a p5.Filter and then calling\nits method <code>setType('lowpass')</code>.\nSee p5.Filter for methods.</p>\n",
                  is_constructor: 1,
                  extends: 'p5.Filter'
                },
                'p5.HighPass': {
                  name: 'p5.HighPass',
                  shortname: 'p5.HighPass',
                  classitems: [],
                  plugins: [],
                  extensions: [],
                  plugin_for: [],
                  extension_for: [],
                  module: 'p5.sound',
                  submodule: 'p5.sound',
                  namespace: '',
                  file: 'lib/addons/p5.sound.js',
                  line: 8744,
                  description:
                    "<p>Constructor: <code>new p5.HighPass()</code> Filter.\nThis is the same as creating a p5.Filter and then calling\nits method <code>setType('highpass')</code>.\nSee p5.Filter for methods.</p>\n",
                  is_constructor: 1,
                  extends: 'p5.Filter'
                },
                'p5.BandPass': {
                  name: 'p5.BandPass',
                  shortname: 'p5.BandPass',
                  classitems: [],
                  plugins: [],
                  extensions: [],
                  plugin_for: [],
                  extension_for: [],
                  module: 'p5.sound',
                  submodule: 'p5.sound',
                  namespace: '',
                  file: 'lib/addons/p5.sound.js',
                  line: 8758,
                  description:
                    "<p>Constructor: <code>new p5.BandPass()</code> Filter.\nThis is the same as creating a p5.Filter and then calling\nits method <code>setType('bandpass')</code>.\nSee p5.Filter for methods.</p>\n",
                  is_constructor: 1,
                  extends: 'p5.Filter'
                },
                'p5.EQ': {
                  name: 'p5.EQ',
                  shortname: 'p5.EQ',
                  classitems: [],
                  plugins: [],
                  extensions: [],
                  plugin_for: [],
                  extension_for: [],
                  module: 'p5.sound',
                  submodule: 'p5.sound',
                  namespace: '',
                  file: 'lib/addons/p5.sound.js',
                  line: 8829,
                  description:
                    '<p>p5.EQ is an audio effect that performs the function of a multiband\naudio equalizer. Equalization is used to adjust the balance of\nfrequency compoenents of an audio signal. This process is commonly used\nin sound production and recording to change the waveform before it reaches\na sound output device. EQ can also be used as an audio effect to create\ninteresting distortions by filtering out parts of the spectrum. p5.EQ is\nbuilt using a chain of Web Audio Biquad Filter Nodes and can be\ninstantiated with 3 or 8 bands. Bands can be added or removed from\nthe EQ by directly modifying p5.EQ.bands (the array that stores filters).</p>\n<p>This class extends <a href = "/reference/#/p5.Effect">p5.Effect</a>.\nMethods <a href = "/reference/#/p5.Effect/amp">amp()</a>, <a href = "/reference/#/p5.Effect/chain">chain()</a>,\n<a href = "/reference/#/p5.Effect/drywet">drywet()</a>, <a href = "/reference/#/p5.Effect/connect">connect()</a>, and\n<a href = "/reference/#/p5.Effect/disconnect">disconnect()</a> are available.</p>\n',
                  is_constructor: 1,
                  extends: 'p5.Effect',
                  params: [
                    {
                      name: '_eqsize',
                      description: '<p>Constructor will accept 3 or 8, defaults to 3</p>\n',
                      type: 'Number',
                      optional: true
                    }
                  ],
                  return: {
                    description: 'p5.EQ object',
                    type: 'Object'
                  },
                  example: [
                    "\n<div><code>\nlet eq;\nlet band_names;\nlet band_index;\n\nlet soundFile, play;\n\nfunction preload() {\n  soundFormats('mp3', 'ogg');\n  soundFile = loadSound('assets/beat');\n}\n\nfunction setup() {\n  eq = new p5.EQ(3);\n  soundFile.disconnect();\n  eq.process(soundFile);\n\n  band_names = ['lows','mids','highs'];\n  band_index = 0;\n  play = false;\n  textAlign(CENTER);\n}\n\nfunction draw() {\n  background(30);\n  noStroke();\n  fill(255);\n  text('click to kill',50,25);\n\n  fill(255, 40, 255);\n  textSize(26);\n  text(band_names[band_index],50,55);\n\n  fill(255);\n  textSize(9);\n  text('space = play/pause',50,80);\n}\n\n//If mouse is over canvas, cycle to the next band and kill the frequency\nfunction mouseClicked() {\n  for (let i = 0; i < eq.bands.length; i++) {\n    eq.bands[i].gain(0);\n  }\n  eq.bands[band_index].gain(-40);\n  if (mouseX > 0 && mouseX < width && mouseY < height && mouseY > 0) {\n    band_index === 2 ? band_index = 0 : band_index++;\n  }\n}\n\n//use space bar to trigger play / pause\nfunction keyPressed() {\n  if (key===' ') {\n    play = !play\n    play ? soundFile.loop() : soundFile.pause();\n  }\n}\n</code></div>"
                  ]
                },
                'p5.Panner3D': {
                  name: 'p5.Panner3D',
                  shortname: 'p5.Panner3D',
                  classitems: [],
                  plugins: [],
                  extensions: [],
                  plugin_for: [],
                  extension_for: [],
                  module: 'p5.sound',
                  submodule: 'p5.sound',
                  namespace: '',
                  file: 'lib/addons/p5.sound.js',
                  line: 9021,
                  description:
                    '<p>Panner3D is based on the <a title="Web Audio Panner docs"  href=\n"https://developer.mozilla.org/en-US/docs/Web/API/PannerNode">\nWeb Audio Spatial Panner Node</a>.\nThis panner is a spatial processing node that allows audio to be positioned\nand oriented in 3D space.</p>\n<p>The position is relative to an <a title="Web Audio Listener docs" href=\n"https://developer.mozilla.org/en-US/docs/Web/API/AudioListener">\nAudio Context Listener</a>, which can be accessed\nby <code>p5.soundOut.audiocontext.listener</code></p>\n',
                  is_constructor: 1
                },
                'p5.Delay': {
                  name: 'p5.Delay',
                  shortname: 'p5.Delay',
                  classitems: [],
                  plugins: [],
                  extensions: [],
                  plugin_for: [],
                  extension_for: [],
                  module: 'p5.sound',
                  submodule: 'p5.sound',
                  namespace: '',
                  file: 'lib/addons/p5.sound.js',
                  line: 9472,
                  description:
                    '<p>Delay is an echo effect. It processes an existing sound source,\nand outputs a delayed version of that sound. The p5.Delay can\nproduce different effects depending on the delayTime, feedback,\nfilter, and type. In the example below, a feedback of 0.5 (the\ndefaul value) will produce a looping delay that decreases in\nvolume by 50% each repeat. A filter will cut out the high\nfrequencies so that the delay does not sound as piercing as the\noriginal source.</p>\n<p>This class extends <a href = "/reference/#/p5.Effect">p5.Effect</a>.\nMethods <a href = "/reference/#/p5.Effect/amp">amp()</a>, <a href = "/reference/#/p5.Effect/chain">chain()</a>,\n<a href = "/reference/#/p5.Effect/drywet">drywet()</a>, <a href = "/reference/#/p5.Effect/connect">connect()</a>, and\n<a href = "/reference/#/p5.Effect/disconnect">disconnect()</a> are available.</p>\n',
                  extends: 'p5.Effect',
                  is_constructor: 1,
                  example: [
                    "\n<div><code>\nlet noise, env, delay;\n\nfunction setup() {\n  background(0);\n  noStroke();\n  fill(255);\n  textAlign(CENTER);\n  text('click to play', width/2, height/2);\n\n  noise = new p5.Noise('brown');\n  noise.amp(0);\n  noise.start();\n\n  delay = new p5.Delay();\n\n  // delay.process() accepts 4 parameters:\n  // source, delayTime, feedback, filter frequency\n  // play with these numbers!!\n  delay.process(noise, .12, .7, 2300);\n\n  // play the noise with an envelope,\n  // a series of fades ( time / value pairs )\n  env = new p5.Envelope(.01, 0.2, .2, .1);\n}\n\n// mouseClick triggers envelope\nfunction mouseClicked() {\n  // is mouse over canvas?\n  if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height) {\n    env.play(noise);\n  }\n}\n</code></div>"
                  ]
                },
                'p5.Reverb': {
                  name: 'p5.Reverb',
                  shortname: 'p5.Reverb',
                  classitems: [],
                  plugins: [],
                  extensions: [],
                  plugin_for: [],
                  extension_for: [],
                  module: 'p5.sound',
                  submodule: 'p5.sound',
                  namespace: '',
                  file: 'lib/addons/p5.sound.js',
                  line: 9749,
                  description:
                    '<p>Reverb adds depth to a sound through a large number of decaying\nechoes. It creates the perception that sound is occurring in a\nphysical space. The p5.Reverb has paramters for Time (how long does the\nreverb last) and decayRate (how much the sound decays with each echo)\nthat can be set with the .set() or .process() methods. The p5.Convolver\nextends p5.Reverb allowing you to recreate the sound of actual physical\nspaces through convolution.</p>\n<p>This class extends <a href = "/reference/#/p5.Effect">p5.Effect</a>.\nMethods <a href = "/reference/#/p5.Effect/amp">amp()</a>, <a href = "/reference/#/p5.Effect/chain">chain()</a>,\n<a href = "/reference/#/p5.Effect/drywet">drywet()</a>, <a href = "/reference/#/p5.Effect/connect">connect()</a>, and\n<a href = "/reference/#/p5.Effect/disconnect">disconnect()</a> are available.</p>\n',
                  extends: 'p5.Effect',
                  is_constructor: 1,
                  example: [
                    "\n<div><code>\nlet soundFile, reverb;\nfunction preload() {\n  soundFile = loadSound('assets/Damscray_DancingTiger.mp3');\n}\n\nfunction setup() {\n  reverb = new p5.Reverb();\n  soundFile.disconnect(); // so we'll only hear reverb...\n\n  // connect soundFile to reverb, process w/\n  // 3 second reverbTime, decayRate of 2%\n  reverb.process(soundFile, 3, 2);\n  soundFile.play();\n}\n</code></div>"
                  ]
                },
                'p5.Convolver': {
                  name: 'p5.Convolver',
                  shortname: 'p5.Convolver',
                  classitems: [],
                  plugins: [],
                  extensions: [],
                  plugin_for: [],
                  extension_for: [],
                  module: 'p5.sound',
                  submodule: 'p5.sound',
                  namespace: '',
                  file: 'lib/addons/p5.sound.js',
                  line: 9920,
                  description:
                    '<p>p5.Convolver extends p5.Reverb. It can emulate the sound of real\nphysical spaces through a process called <a href="\nhttps://en.wikipedia.org/wiki/Convolution_reverb#Real_space_simulation">\nconvolution</a>.</p>\n\n<p>Convolution multiplies any audio input by an "impulse response"\nto simulate the dispersion of sound over time. The impulse response is\ngenerated from an audio file that you provide. One way to\ngenerate an impulse response is to pop a balloon in a reverberant space\nand record the echo. Convolution can also be used to experiment with\nsound.</p>\n\n<p>Use the method <code>createConvolution(path)</code> to instantiate a\np5.Convolver with a path to your impulse response audio file.</p>',
                  extends: 'p5.Effect',
                  is_constructor: 1,
                  params: [
                    {
                      name: 'path',
                      description: '<p>path to a sound file</p>\n',
                      type: 'String'
                    },
                    {
                      name: 'callback',
                      description: '<p>function to call when loading succeeds</p>\n',
                      type: 'Function',
                      optional: true
                    },
                    {
                      name: 'errorCallback',
                      description:
                        '<p>function to call if loading fails.\n                                   This function will receive an error or\n                                   XMLHttpRequest object with information\n                                   about what went wrong.</p>\n',
                      type: 'Function',
                      optional: true
                    }
                  ],
                  example: [
                    "\n<div><code>\nlet cVerb, sound;\nfunction preload() {\n  // We have both MP3 and OGG versions of all sound assets\n  soundFormats('ogg', 'mp3');\n\n  // Try replacing 'bx-spring' with other soundfiles like\n  // 'concrete-tunnel' 'small-plate' 'drum' 'beatbox'\n  cVerb = createConvolver('assets/bx-spring.mp3');\n\n  // Try replacing 'Damscray_DancingTiger' with\n  // 'beat', 'doorbell', lucky_dragons_-_power_melody'\n  sound = loadSound('assets/Damscray_DancingTiger.mp3');\n}\n\nfunction setup() {\n  // disconnect from master output...\n  sound.disconnect();\n\n  // ...and process with cVerb\n  // so that we only hear the convolution\n  cVerb.process(sound);\n\n  sound.play();\n}\n</code></div>"
                  ]
                },
                'p5.Phrase': {
                  name: 'p5.Phrase',
                  shortname: 'p5.Phrase',
                  classitems: [],
                  plugins: [],
                  extensions: [],
                  plugin_for: [],
                  extension_for: [],
                  module: 'p5.sound',
                  submodule: 'p5.sound',
                  namespace: '',
                  file: 'lib/addons/p5.sound.js',
                  line: 10476,
                  description:
                    "<p>A phrase is a pattern of musical events over time, i.e.\na series of notes and rests.</p>\n\n<p>Phrases must be added to a p5.Part for playback, and\neach part can play multiple phrases at the same time.\nFor example, one Phrase might be a kick drum, another\ncould be a snare, and another could be the bassline.</p>\n\n<p>The first parameter is a name so that the phrase can be\nmodified or deleted later. The callback is a a function that\nthis phrase will call at every step???for example it might be\ncalled <code>playNote(value){}</code>. The array determines\nwhich value is passed into the callback at each step of the\nphrase. It can be numbers, an object with multiple numbers,\nor a zero (0) indicates a rest so the callback won't be called).</p>",
                  is_constructor: 1,
                  params: [
                    {
                      name: 'name',
                      description: '<p>Name so that you can access the Phrase.</p>\n',
                      type: 'String'
                    },
                    {
                      name: 'callback',
                      description:
                        '<p>The name of a function that this phrase\n                           will call. Typically it will play a sound,\n                           and accept two parameters: a time at which\n                           to play the sound (in seconds from now),\n                           and a value from the sequence array. The\n                           time should be passed into the play() or\n                           start() method to ensure precision.</p>\n',
                      type: 'Function'
                    },
                    {
                      name: 'sequence',
                      description:
                        '<p>Array of values to pass into the callback\n                          at each step of the phrase.</p>\n',
                      type: 'Array'
                    }
                  ],
                  example: [
                    "\n<div><code>\nlet mySound, myPhrase, myPart;\nlet pattern = [1,0,0,2,0,2,0,0];\nlet msg = 'click to play';\n\nfunction preload() {\n  mySound = loadSound('assets/beatbox.mp3');\n}\n\nfunction setup() {\n  noStroke();\n  fill(255);\n  textAlign(CENTER);\n  masterVolume(0.1);\n\n  myPhrase = new p5.Phrase('bbox', makeSound, pattern);\n  myPart = new p5.Part();\n  myPart.addPhrase(myPhrase);\n  myPart.setBPM(60);\n}\n\nfunction draw() {\n  background(0);\n  text(msg, width/2, height/2);\n}\n\nfunction makeSound(time, playbackRate) {\n  mySound.rate(playbackRate);\n  mySound.play(time);\n}\n\nfunction mouseClicked() {\n  if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height) {\n    myPart.start();\n    msg = 'playing pattern';\n  }\n}\n\n</code></div>"
                  ]
                },
                'p5.Part': {
                  name: 'p5.Part',
                  shortname: 'p5.Part',
                  classitems: [],
                  plugins: [],
                  extensions: [],
                  plugin_for: [],
                  extension_for: [],
                  module: 'p5.sound',
                  submodule: 'p5.sound',
                  namespace: '',
                  file: 'lib/addons/p5.sound.js',
                  line: 10561,
                  description:
                    '<p>A p5.Part plays back one or more p5.Phrases. Instantiate a part\nwith steps and tatums. By default, each step represents a 1/16th note.</p>\n\n<p>See p5.Phrase for more about musical timing.</p>',
                  is_constructor: 1,
                  params: [
                    {
                      name: 'steps',
                      description: '<p>Steps in the part</p>\n',
                      type: 'Number',
                      optional: true
                    },
                    {
                      name: 'tatums',
                      description:
                        '<p>Divisions of a beat, e.g. use 1/4, or 0.25 for a quater note (default is 1/16, a sixteenth note)</p>\n',
                      type: 'Number',
                      optional: true
                    }
                  ],
                  example: [
                    "\n<div><code>\nlet box, drum, myPart;\nlet boxPat = [1,0,0,2,0,2,0,0];\nlet drumPat = [0,1,1,0,2,0,1,0];\nlet msg = 'click to play';\n\nfunction preload() {\n  box = loadSound('assets/beatbox.mp3');\n  drum = loadSound('assets/drum.mp3');\n}\n\nfunction setup() {\n  noStroke();\n  fill(255);\n  textAlign(CENTER);\n  masterVolume(0.1);\n\n  let boxPhrase = new p5.Phrase('box', playBox, boxPat);\n  let drumPhrase = new p5.Phrase('drum', playDrum, drumPat);\n  myPart = new p5.Part();\n  myPart.addPhrase(boxPhrase);\n  myPart.addPhrase(drumPhrase);\n  myPart.setBPM(60);\n  masterVolume(0.1);\n}\n\nfunction draw() {\n  background(0);\n  text(msg, width/2, height/2);\n}\n\nfunction playBox(time, playbackRate) {\n  box.rate(playbackRate);\n  box.play(time);\n}\n\nfunction playDrum(time, playbackRate) {\n  drum.rate(playbackRate);\n  drum.play(time);\n}\n\nfunction mouseClicked() {\n  if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height) {\n    myPart.start();\n    msg = 'playing part';\n  }\n}\n</code></div>"
                  ]
                },
                'p5.Score': {
                  name: 'p5.Score',
                  shortname: 'p5.Score',
                  classitems: [],
                  plugins: [],
                  extensions: [],
                  plugin_for: [],
                  extension_for: [],
                  module: 'p5.sound',
                  submodule: 'p5.sound',
                  namespace: '',
                  file: 'lib/addons/p5.sound.js',
                  line: 10814,
                  description:
                    '<p>A Score consists of a series of Parts. The parts will\nbe played back in order. For example, you could have an\nA part, a B part, and a C part, and play them back in this order\n<code>new p5.Score(a, a, b, a, c)</code></p>\n',
                  is_constructor: 1,
                  params: [
                    {
                      name: 'parts',
                      description:
                        '<p>One or multiple parts, to be played in sequence.</p>\n',
                      type: 'p5.Part',
                      optional: true,
                      multiple: true
                    }
                  ]
                },
                'p5.SoundLoop': {
                  name: 'p5.SoundLoop',
                  shortname: 'p5.SoundLoop',
                  classitems: [],
                  plugins: [],
                  extensions: [],
                  plugin_for: [],
                  extension_for: [],
                  module: 'p5.sound',
                  submodule: 'p5.sound',
                  namespace: '',
                  file: 'lib/addons/p5.sound.js',
                  line: 10945,
                  description: '<p>SoundLoop</p>\n',
                  is_constructor: 1,
                  params: [
                    {
                      name: 'callback',
                      description:
                        '<p>this function will be called on each iteration of theloop</p>\n',
                      type: 'Function'
                    },
                    {
                      name: 'interval',
                      description:
                        '<p>amount of time or beats for each iteration of the loop\n                                      defaults to 1</p>\n',
                      type: 'Number|String',
                      optional: true
                    }
                  ],
                  example: [
                    "\n<div><code>\nlet click;\nlet looper1;\n\nfunction preload() {\n  click = loadSound('assets/drum.mp3');\n}\n\nfunction setup() {\n  //the looper's callback is passed the timeFromNow\n  //this value should be used as a reference point from\n  //which to schedule sounds\n  looper1 = new p5.SoundLoop(function(timeFromNow){\n    click.play(timeFromNow);\n    background(255 * (looper1.iterations % 2));\n    }, 2);\n\n  //stop after 10 iteratios;\n  looper1.maxIterations = 10;\n  //start the loop\n  looper1.start();\n}\n</code></div>"
                  ]
                },
                'p5.Compressor': {
                  name: 'p5.Compressor',
                  shortname: 'p5.Compressor',
                  classitems: [],
                  plugins: [],
                  extensions: [],
                  plugin_for: [],
                  extension_for: [],
                  module: 'p5.sound',
                  submodule: 'p5.sound',
                  namespace: '',
                  file: 'lib/addons/p5.sound.js',
                  line: 11205,
                  description:
                    '<p>Compressor is an audio effect class that performs dynamics compression\non an audio input source. This is a very commonly used technique in music\nand sound production. Compression creates an overall louder, richer, \nand fuller sound by lowering the volume of louds and raising that of softs.\nCompression can be used to avoid clipping (sound distortion due to \npeaks in volume) and is especially useful when many sounds are played \nat once. Compression can be used on indivudal sound sources in addition\nto the master output.  </p>\n<p>This class extends <a href = "/reference/#/p5.Effect">p5.Effect</a>.  \nMethods <a href = "/reference/#/p5.Effect/amp">amp()</a>, <a href = "/reference/#/p5.Effect/chain">chain()</a>, \n<a href = "/reference/#/p5.Effect/drywet">drywet()</a>, <a href = "/reference/#/p5.Effect/connect">connect()</a>, and \n<a href = "/reference/#/p5.Effect/disconnect">disconnect()</a> are available.</p>\n',
                  is_constructor: 1,
                  extends: 'p5.Effect'
                },
                'p5.SoundRecorder': {
                  name: 'p5.SoundRecorder',
                  shortname: 'p5.SoundRecorder',
                  classitems: [],
                  plugins: [],
                  extensions: [],
                  plugin_for: [],
                  extension_for: [],
                  module: 'p5.sound',
                  submodule: 'p5.sound',
                  namespace: '',
                  file: 'lib/addons/p5.sound.js',
                  line: 11417,
                  description:
                    '<p>Record sounds for playback and/or to save as a .wav file.\nThe p5.SoundRecorder records all sound output from your sketch,\nor can be assigned a specific source with setInput().</p>\n<p>The record() method accepts a p5.SoundFile as a parameter.\nWhen playback is stopped (either after the given amount of time,\nor with the stop() method), the p5.SoundRecorder will send its\nrecording to that p5.SoundFile for playback.</p>',
                  is_constructor: 1,
                  example: [
                    "\n<div><code>\nlet mic, recorder, soundFile;\nlet state = 0;\n\nfunction setup() {\n  background(200);\n  // create an audio in\n  mic = new p5.AudioIn();\n\n  // prompts user to enable their browser mic\n  mic.start();\n\n  // create a sound recorder\n  recorder = new p5.SoundRecorder();\n\n  // connect the mic to the recorder\n  recorder.setInput(mic);\n\n  // this sound file will be used to\n  // playback & save the recording\n  soundFile = new p5.SoundFile();\n\n  text('keyPress to record', 20, 20);\n}\n\nfunction keyPressed() {\n  // make sure user enabled the mic\n  if (state === 0 && mic.enabled) {\n\n    // record to our p5.SoundFile\n    recorder.record(soundFile);\n\n    background(255,0,0);\n    text('Recording!', 20, 20);\n    state++;\n  }\n  else if (state === 1) {\n    background(0,255,0);\n\n    // stop recorder and\n    // send result to soundFile\n    recorder.stop();\n\n    text('Stopped', 20, 20);\n    state++;\n  }\n\n  else if (state === 2) {\n    soundFile.play(); // play the result!\n    save(soundFile, 'mySound.wav');\n    state++;\n  }\n}\n</div></code>"
                  ]
                },
                'p5.PeakDetect': {
                  name: 'p5.PeakDetect',
                  shortname: 'p5.PeakDetect',
                  classitems: [],
                  plugins: [],
                  extensions: [],
                  plugin_for: [],
                  extension_for: [],
                  module: 'p5.sound',
                  submodule: 'p5.sound',
                  namespace: '',
                  file: 'lib/addons/p5.sound.js',
                  line: 11655,
                  description:
                    '<p>PeakDetect works in conjunction with p5.FFT to\nlook for onsets in some or all of the frequency spectrum.\n</p>\n<p>\nTo use p5.PeakDetect, call <code>update</code> in the draw loop\nand pass in a p5.FFT object.\n</p>\n<p>\nYou can listen for a specific part of the frequency spectrum by\nsetting the range between <code>freq1</code> and <code>freq2</code>.\n</p>\n\n<p><code>threshold</code> is the threshold for detecting a peak,\nscaled between 0 and 1. It is logarithmic, so 0.1 is half as loud\nas 1.0.</p>\n\n<p>\nThe update method is meant to be run in the draw loop, and\n<b>frames</b> determines how many loops must pass before\nanother peak can be detected.\nFor example, if the frameRate() = 60, you could detect the beat of a\n120 beat-per-minute song with this equation:\n<code> framesPerPeak = 60 / (estimatedBPM / 60 );</code>\n</p>\n\n<p>\nBased on example contribtued by @b2renger, and a simple beat detection\nexplanation by <a\nhref="http://www.airtightinteractive.com/2013/10/making-audio-reactive-visuals/"\ntarget="_blank">Felix Turner</a>.\n</p>',
                  is_constructor: 1,
                  params: [
                    {
                      name: 'freq1',
                      description: '<p>lowFrequency - defaults to 20Hz</p>\n',
                      type: 'Number',
                      optional: true
                    },
                    {
                      name: 'freq2',
                      description: '<p>highFrequency - defaults to 20000 Hz</p>\n',
                      type: 'Number',
                      optional: true
                    },
                    {
                      name: 'threshold',
                      description:
                        '<p>Threshold for detecting a beat between 0 and 1\n                          scaled logarithmically where 0.1 is 1/2 the loudness\n                          of 1.0. Defaults to 0.35.</p>\n',
                      type: 'Number',
                      optional: true
                    },
                    {
                      name: 'framesPerPeak',
                      description: '<p>Defaults to 20.</p>\n',
                      type: 'Number',
                      optional: true
                    }
                  ],
                  example: [
                    "\n<div><code>\n\nlet cnv, soundFile, fft, peakDetect;\nlet ellipseWidth = 10;\n\nfunction preload() {\n  soundFile = loadSound('assets/beat.mp3');\n}\n\nfunction setup() {\n  background(0);\n  noStroke();\n  fill(255);\n  textAlign(CENTER);\n\n  // p5.PeakDetect requires a p5.FFT\n  fft = new p5.FFT();\n  peakDetect = new p5.PeakDetect();\n}\n\nfunction draw() {\n  background(0);\n  text('click to play/pause', width/2, height/2);\n\n  // peakDetect accepts an fft post-analysis\n  fft.analyze();\n  peakDetect.update(fft);\n\n  if ( peakDetect.isDetected ) {\n    ellipseWidth = 50;\n  } else {\n    ellipseWidth *= 0.95;\n  }\n\n  ellipse(width/2, height/2, ellipseWidth, ellipseWidth);\n}\n\n// toggle play/stop when canvas is clicked\nfunction mouseClicked() {\n  if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height) {\n    if (soundFile.isPlaying() ) {\n      soundFile.stop();\n    } else {\n      soundFile.play();\n    }\n  }\n}\n</code></div>"
                  ]
                },
                'p5.Gain': {
                  name: 'p5.Gain',
                  shortname: 'p5.Gain',
                  classitems: [],
                  plugins: [],
                  extensions: [],
                  plugin_for: [],
                  extension_for: [],
                  module: 'p5.sound',
                  submodule: 'p5.sound',
                  namespace: '',
                  file: 'lib/addons/p5.sound.js',
                  line: 11879,
                  description:
                    '<p>A gain node is usefull to set the relative volume of sound.\nIt&#39;s typically used to build mixers.</p>\n',
                  is_constructor: 1,
                  example: [
                    "\n<div><code>\n\n // load two soundfile and crossfade beetween them\n let sound1,sound2;\n let gain1, gain2, gain3;\n\n function preload(){\n soundFormats('ogg', 'mp3');\n sound1 = loadSound('assets/Damscray_-_Dancing_Tiger_01');\n sound2 = loadSound('assets/beat.mp3');\n }\n\n function setup() {\n createCanvas(400,200);\n\n // create a 'master' gain to which we will connect both soundfiles\n gain3 = new p5.Gain();\n gain3.connect();\n\n // setup first sound for playing\n sound1.rate(1);\n sound1.loop();\n sound1.disconnect(); // diconnect from p5 output\n\n gain1 = new p5.Gain(); // setup a gain node\n gain1.setInput(sound1); // connect the first sound to its input\n gain1.connect(gain3); // connect its output to the 'master'\n\n sound2.rate(1);\n sound2.disconnect();\n sound2.loop();\n\n gain2 = new p5.Gain();\n gain2.setInput(sound2);\n gain2.connect(gain3);\n\n }\n\n function draw(){\n background(180);\n\n // calculate the horizontal distance beetween the mouse and the right of the screen\n let d = dist(mouseX,0,width,0);\n\n // map the horizontal position of the mouse to values useable for volume control of sound1\n let vol1 = map(mouseX,0,width,0,1);\n let vol2 = 1-vol1; // when sound1 is loud, sound2 is quiet and vice versa\n\n gain1.amp(vol1,0.5,0);\n gain2.amp(vol2,0.5,0);\n\n // map the vertical position of the mouse to values useable for 'master volume control'\n let vol3 = map(mouseY,0,height,0,1);\n gain3.amp(vol3,0.5,0);\n }\n</code></div>\n"
                  ]
                },
                'p5.AudioVoice': {
                  name: 'p5.AudioVoice',
                  shortname: 'p5.AudioVoice',
                  classitems: [],
                  plugins: [],
                  extensions: [],
                  plugin_for: [],
                  extension_for: [],
                  module: 'p5.sound',
                  submodule: 'p5.sound',
                  namespace: '',
                  file: 'lib/addons/p5.sound.js',
                  line: 12020,
                  description:
                    '<p>Base class for monophonic synthesizers. Any extensions of this class\nshould follow the API and implement the methods below in order to \nremain compatible with p5.PolySynth();</p>\n',
                  is_constructor: 1
                },
                'p5.MonoSynth': {
                  name: 'p5.MonoSynth',
                  shortname: 'p5.MonoSynth',
                  classitems: [],
                  plugins: [],
                  extensions: [],
                  plugin_for: [],
                  extension_for: [],
                  module: 'p5.sound',
                  submodule: 'p5.sound',
                  namespace: '',
                  file: 'lib/addons/p5.sound.js',
                  line: 12073,
                  description:
                    '<p>A MonoSynth is used as a single voice for sound synthesis.\nThis is a class to be used in conjunction with the PolySynth\nclass. Custom synthetisers should be built inheriting from\nthis class.</p>\n',
                  is_constructor: 1,
                  example: [
                    '\n<div><code>\nlet monoSynth;\n\nfunction setup() {\n  let cnv = createCanvas(100, 100);\n  cnv.mousePressed(playSynth);\n\n  monoSynth = new p5.MonoSynth();\n\n  textAlign(CENTER);\n  text(\'click to play\', width/2, height/2);\n}\n\nfunction playSynth() {\n  // time from now (in seconds)\n  let time = 0;\n  // note duration (in seconds)\n  let dur = 0.25;\n  // velocity (volume, from 0 to 1)\n  let v = 0.2;\n\n  monoSynth.play("G3", v, time, dur);\n  monoSynth.play("C4", v, time += dur, dur);\n\n  background(random(255), random(255), 255);\n  text(\'click to play\', width/2, height/2);\n}\n</code></div>'
                  ]
                },
                'p5.PolySynth': {
                  name: 'p5.PolySynth',
                  shortname: 'p5.PolySynth',
                  classitems: [],
                  plugins: [],
                  extensions: [],
                  plugin_for: [],
                  extension_for: [],
                  module: 'p5.sound',
                  submodule: 'p5.sound',
                  namespace: '',
                  file: 'lib/addons/p5.sound.js',
                  line: 12362,
                  description:
                    '<p>An AudioVoice is used as a single voice for sound synthesis.\nThe PolySynth class holds an array of AudioVoice, and deals\nwith voices allocations, with setting notes to be played, and\nparameters to be set.</p>\n',
                  is_constructor: 1,
                  params: [
                    {
                      name: 'synthVoice',
                      description:
                        '<p>A monophonic synth voice inheriting\n                               the AudioVoice class. Defaults to p5.MonoSynth</p>\n',
                      type: 'Number',
                      optional: true
                    },
                    {
                      name: 'maxVoices',
                      description: '<p>Number of voices, defaults to 8;</p>\n',
                      type: 'Number',
                      optional: true
                    }
                  ],
                  example: [
                    '\n<div><code>\nlet polySynth;\n\nfunction setup() {\n  let cnv = createCanvas(100, 100);\n  cnv.mousePressed(playSynth);\n\n  polySynth = new p5.PolySynth();\n\n  textAlign(CENTER);\n  text(\'click to play\', width/2, height/2);\n}\n\nfunction playSynth() {\n  // note duration (in seconds)\n  let dur = 1.5;\n\n  // time from now (in seconds)\n  let time = 0;\n\n  // velocity (volume, from 0 to 1)\n  let vel = 0.1;\n\n  // notes can overlap with each other\n  polySynth.play("G2", vel, 0, dur);\n  polySynth.play("C3", vel, time += 1/3, dur);\n  polySynth.play("G3", vel, time += 1/3, dur);\n\n  background(random(255), random(255), 255);\n  text(\'click to play\', width/2, height/2);\n}\n</code></div>'
                  ]
                },
                'p5.Distortion': {
                  name: 'p5.Distortion',
                  shortname: 'p5.Distortion',
                  classitems: [],
                  plugins: [],
                  extensions: [],
                  plugin_for: [],
                  extension_for: [],
                  module: 'p5.sound',
                  submodule: 'p5.sound',
                  namespace: '',
                  file: 'lib/addons/p5.sound.js',
                  line: 12767,
                  description:
                    '<p>A Distortion effect created with a Waveshaper Node,\nwith an approach adapted from\n<a href="http://stackoverflow.com/questions/22312841/waveshaper-node-in-webaudio-how-to-emulate-distortion">Kevin Ennis</a></p>\n<p>This class extends <a href = "/reference/#/p5.Effect">p5.Effect</a>.  \nMethods <a href = "/reference/#/p5.Effect/amp">amp()</a>, <a href = "/reference/#/p5.Effect/chain">chain()</a>, \n<a href = "/reference/#/p5.Effect/drywet">drywet()</a>, <a href = "/reference/#/p5.Effect/connect">connect()</a>, and \n<a href = "/reference/#/p5.Effect/disconnect">disconnect()</a> are available.</p>\n',
                  extends: 'p5.Effect',
                  is_constructor: 1,
                  params: [
                    {
                      name: 'amount',
                      description:
                        '<p>Unbounded distortion amount.\n                               Normal values range from 0-1.</p>\n',
                      type: 'Number',
                      optional: true,
                      optdefault: '0.25'
                    },
                    {
                      name: 'oversample',
                      description: '<p>&#39;none&#39;, &#39;2x&#39;, or &#39;4x&#39;.</p>\n',
                      type: 'String',
                      optional: true,
                      optdefault: "'none'"
                    }
                  ]
                }
              },
              elements: {},
              classitems: [
                {
                  file: 'src/color/color_conversion.js',
                  line: 8,
                  description:
                    '<p>Conversions adapted from <a href="http://www.easyrgb.com/en/math.php">http://www.easyrgb.com/en/math.php</a>.</p>\n<p>In these functions, hue is always in the range [0, 1], just like all other\ncomponents are in the range [0, 1]. &#39;Brightness&#39; and &#39;value&#39; are used\ninterchangeably.</p>\n',
                  class: 'p5',
                  module: 'Color',
                  submodule: 'Color Conversion'
                },
                {
                  file: 'src/color/color_conversion.js',
                  line: 19,
                  description: '<p>Convert an HSBA array to HSLA.</p>\n',
                  class: 'p5',
                  module: 'Color',
                  submodule: 'Color Conversion'
                },
                {
                  file: 'src/color/color_conversion.js',
                  line: 45,
                  description: '<p>Convert an HSBA array to RGBA.</p>\n',
                  class: 'p5',
                  module: 'Color',
                  submodule: 'Color Conversion'
                },
                {
                  file: 'src/color/color_conversion.js',
                  line: 100,
                  description: '<p>Convert an HSLA array to HSBA.</p>\n',
                  class: 'p5',
                  module: 'Color',
                  submodule: 'Color Conversion'
                },
                {
                  file: 'src/color/color_conversion.js',
                  line: 123,
                  description:
                    '<p>Convert an HSLA array to RGBA.</p>\n<p>We need to change basis from HSLA to something that can be more easily be\nprojected onto RGBA. We will choose hue and brightness as our first two\ncomponents, and pick a convenient third one (&#39;zest&#39;) so that we don&#39;t need\nto calculate formal HSBA saturation.</p>\n',
                  class: 'p5',
                  module: 'Color',
                  submodule: 'Color Conversion'
                },
                {
                  file: 'src/color/color_conversion.js',
                  line: 187,
                  description: '<p>Convert an RGBA array to HSBA.</p>\n',
                  class: 'p5',
                  module: 'Color',
                  submodule: 'Color Conversion'
                },
                {
                  file: 'src/color/color_conversion.js',
                  line: 226,
                  description: '<p>Convert an RGBA array to HSLA.</p>\n',
                  class: 'p5',
                  module: 'Color',
                  submodule: 'Color Conversion'
                },
                {
                  file: 'src/color/creating_reading.js',
                  line: 14,
                  description:
                    '<p>Extracts the alpha value from a color or pixel array.</p>\n',
                  itemtype: 'method',
                  name: 'alpha',
                  params: [
                    {
                      name: 'color',
                      description:
                        '<p><a href="#/p5.Color">p5.Color</a> object, color components,\n                                        or CSS color</p>\n',
                      type: 'p5.Color|Number[]|String'
                    }
                  ],
                  return: {
                    description: 'the alpha value',
                    type: 'Number'
                  },
                  example: [
                    "\n<div>\n<code>\nnoStroke();\nlet c = color(0, 126, 255, 102);\nfill(c);\nrect(15, 15, 35, 70);\nlet value = alpha(c); // Sets 'value' to 102\nfill(value);\nrect(50, 15, 35, 70);\n</code>\n</div>"
                  ],
                  alt:
                    'Left half of canvas light blue and right half light charcoal grey.\nLeft half of canvas light purple and right half a royal blue.\nLeft half of canvas salmon pink and the right half white.\nYellow rect in middle right of canvas, with 55 pixel width and height.\nYellow ellipse in top left canvas, black ellipse in bottom right,both 80x80.\nBright fuchsia rect in middle of canvas, 60 pixel width and height.\nTwo bright green rects on opposite sides of the canvas, both 45x80.\nFour blue rects in each corner of the canvas, each are 35x35.\nBright sea green rect on left and darker rect on right of canvas, both 45x80.\nDark green rect on left and light green rect on right of canvas, both 45x80.\nDark blue rect on left and light teal rect on right of canvas, both 45x80.\nblue rect on left and green on right, both with black outlines & 35x60.\nsalmon pink rect on left and black on right, both 35x60.\n4 rects, tan, brown, brownish purple and purple, with white outlines & 20x60.\nlight pastel green rect on left and dark grey rect on right, both 35x60.\nyellow rect on left and red rect on right, both with black outlines & 35x60.\ngrey canvas\ndeep pink rect on left and grey rect on right, both 35x60.',
                  class: 'p5',
                  module: 'Color',
                  submodule: 'Creating & Reading'
                },
                {
                  file: 'src/color/creating_reading.js',
                  line: 59,
                  description:
                    '<p>Extracts the blue value from a color or pixel array.</p>\n',
                  itemtype: 'method',
                  name: 'blue',
                  params: [
                    {
                      name: 'color',
                      description:
                        '<p><a href="#/p5.Color">p5.Color</a> object, color components,\n                                        or CSS color</p>\n',
                      type: 'p5.Color|Number[]|String'
                    }
                  ],
                  return: {
                    description: 'the blue value',
                    type: 'Number'
                  },
                  example: [
                    "\n<div>\n<code>\nlet c = color(175, 100, 220); // Define color 'c'\nfill(c); // Use color variable 'c' as fill color\nrect(15, 20, 35, 60); // Draw left rectangle\n\nlet blueValue = blue(c); // Get blue in 'c'\nprint(blueValue); // Prints \"220.0\"\nfill(0, 0, blueValue); // Use 'blueValue' in new fill\nrect(50, 20, 35, 60); // Draw right rectangle\n</code>\n</div>"
                  ],
                  alt: 'Left half of canvas light purple and right half a royal blue.',
                  class: 'p5',
                  module: 'Color',
                  submodule: 'Creating & Reading'
                },
                {
                  file: 'src/color/creating_reading.js',
                  line: 89,
                  description:
                    '<p>Extracts the HSB brightness value from a color or pixel array.</p>\n',
                  itemtype: 'method',
                  name: 'brightness',
                  params: [
                    {
                      name: 'color',
                      description:
                        '<p><a href="#/p5.Color">p5.Color</a> object, color components,\n                                        or CSS color</p>\n',
                      type: 'p5.Color|Number[]|String'
                    }
                  ],
                  return: {
                    description: 'the brightness value',
                    type: 'Number'
                  },
                  example: [
                    "\n<div>\n<code>\nnoStroke();\ncolorMode(HSB, 255);\nlet c = color(0, 126, 255);\nfill(c);\nrect(15, 20, 35, 60);\nlet value = brightness(c); // Sets 'value' to 255\nfill(value);\nrect(50, 20, 35, 60);\n</code>\n</div>\n<div>\n<code>\nnoStroke();\ncolorMode(HSB, 255);\nlet c = color('hsb(60, 100%, 50%)');\nfill(c);\nrect(15, 20, 35, 60);\nlet value = brightness(c); // A 'value' of 50% is 127.5\nfill(value);\nrect(50, 20, 35, 60);\n</code>\n</div>"
                  ],
                  alt:
                    'Left half of canvas salmon pink and the right half white.\nLeft half of canvas yellow at half brightness and the right gray .',
                  class: 'p5',
                  module: 'Color',
                  submodule: 'Creating & Reading'
                },
                {
                  file: 'src/color/creating_reading.js',
                  line: 132,
                  description:
                    '<p>Creates colors for storing in variables of the color datatype. The\nparameters are interpreted as RGB or HSB values depending on the\ncurrent <a href="#/p5/colorMode">colorMode()</a>. The default mode is RGB values from 0 to 255\nand, therefore, the function call color(255, 204, 0) will return a\nbright yellow color.\n<br><br>\nNote that if only one value is provided to <a href="#/p5/color">color()</a>, it will be interpreted\nas a grayscale value. Add a second value, and it will be used for alpha\ntransparency. When three values are specified, they are interpreted as\neither RGB or HSB values. Adding a fourth value applies alpha\ntransparency.\n<br><br>\nIf a single string argument is provided, RGB, RGBA and Hex CSS color\nstrings and all named color strings are supported. In this case, an alpha\nnumber value as a second argument is not supported, the RGBA form should be\nused.</p>\n',
                  itemtype: 'method',
                  name: 'color',
                  return: {
                    description: 'resulting color',
                    type: 'p5.Color'
                  },
                  example: [
                    "\n<div>\n<code>\nlet c = color(255, 204, 0); // Define color 'c'\nfill(c); // Use color variable 'c' as fill color\nnoStroke(); // Don't draw a stroke around shapes\nrect(30, 20, 55, 55); // Draw rectangle\n</code>\n</div>\n\n<div>\n<code>\nlet c = color(255, 204, 0); // Define color 'c'\nfill(c); // Use color variable 'c' as fill color\nnoStroke(); // Don't draw a stroke around shapes\nellipse(25, 25, 80, 80); // Draw left circle\n\n// Using only one value with color()\n// generates a grayscale value.\nc = color(65); // Update 'c' with grayscale value\nfill(c); // Use updated 'c' as fill color\nellipse(75, 75, 80, 80); // Draw right circle\n</code>\n</div>\n\n<div>\n<code>\n// Named SVG & CSS colors may be used,\nlet c = color('magenta');\nfill(c); // Use 'c' as fill color\nnoStroke(); // Don't draw a stroke around shapes\nrect(20, 20, 60, 60); // Draw rectangle\n</code>\n</div>\n\n<div>\n<code>\n// as can hex color codes:\nnoStroke(); // Don't draw a stroke around shapes\nlet c = color('#0f0');\nfill(c); // Use 'c' as fill color\nrect(0, 10, 45, 80); // Draw rectangle\n\nc = color('#00ff00');\nfill(c); // Use updated 'c' as fill color\nrect(55, 10, 45, 80); // Draw rectangle\n</code>\n</div>\n\n<div>\n<code>\n// RGB and RGBA color strings are also supported:\n// these all set to the same color (solid blue)\nlet c;\nnoStroke(); // Don't draw a stroke around shapes\nc = color('rgb(0,0,255)');\nfill(c); // Use 'c' as fill color\nrect(10, 10, 35, 35); // Draw rectangle\n\nc = color('rgb(0%, 0%, 100%)');\nfill(c); // Use updated 'c' as fill color\nrect(55, 10, 35, 35); // Draw rectangle\n\nc = color('rgba(0, 0, 255, 1)');\nfill(c); // Use updated 'c' as fill color\nrect(10, 55, 35, 35); // Draw rectangle\n\nc = color('rgba(0%, 0%, 100%, 1)');\nfill(c); // Use updated 'c' as fill color\nrect(55, 55, 35, 35); // Draw rectangle\n</code>\n</div>\n\n<div>\n<code>\n// HSL color is also supported and can be specified\n// by value\nlet c;\nnoStroke(); // Don't draw a stroke around shapes\nc = color('hsl(160, 100%, 50%)');\nfill(c); // Use 'c' as fill color\nrect(0, 10, 45, 80); // Draw rectangle\n\nc = color('hsla(160, 100%, 50%, 0.5)');\nfill(c); // Use updated 'c' as fill color\nrect(55, 10, 45, 80); // Draw rectangle\n</code>\n</div>\n\n<div>\n<code>\n// HSB color is also supported and can be specified\n// by value\nlet c;\nnoStroke(); // Don't draw a stroke around shapes\nc = color('hsb(160, 100%, 50%)');\nfill(c); // Use 'c' as fill color\nrect(0, 10, 45, 80); // Draw rectangle\n\nc = color('hsba(160, 100%, 50%, 0.5)');\nfill(c); // Use updated 'c' as fill color\nrect(55, 10, 45, 80); // Draw rectangle\n</code>\n</div>\n\n<div>\n<code>\nlet c; // Declare color 'c'\nnoStroke(); // Don't draw a stroke around shapes\n\n// If no colorMode is specified, then the\n// default of RGB with scale of 0-255 is used.\nc = color(50, 55, 100); // Create a color for 'c'\nfill(c); // Use color variable 'c' as fill color\nrect(0, 10, 45, 80); // Draw left rect\n\ncolorMode(HSB, 100); // Use HSB with scale of 0-100\nc = color(50, 55, 100); // Update 'c' with new color\nfill(c); // Use updated 'c' as fill color\nrect(55, 10, 45, 80); // Draw right rect\n</code>\n</div>"
                  ],
                  alt:
                    'Yellow rect in middle right of canvas, with 55 pixel width and height.\nYellow ellipse in top left of canvas, black ellipse in bottom right,both 80x80.\nBright fuchsia rect in middle of canvas, 60 pixel width and height.\nTwo bright green rects on opposite sides of the canvas, both 45x80.\nFour blue rects in each corner of the canvas, each are 35x35.\nBright sea green rect on left and darker rect on right of canvas, both 45x80.\nDark green rect on left and lighter green rect on right of canvas, both 45x80.\nDark blue rect on left and light teal rect on right of canvas, both 45x80.',
                  class: 'p5',
                  module: 'Color',
                  submodule: 'Creating & Reading',
                  overloads: [
                    {
                      line: 132,
                      params: [
                        {
                          name: 'gray',
                          description:
                            '<p>number specifying value between white\n                                and black.</p>\n',
                          type: 'Number'
                        },
                        {
                          name: 'alpha',
                          description:
                            '<p>alpha value relative to current color range\n                                (default is 0-255)</p>\n',
                          type: 'Number',
                          optional: true
                        }
                      ],
                      return: {
                        description: 'resulting color',
                        type: 'p5.Color'
                      }
                    },
                    {
                      line: 291,
                      params: [
                        {
                          name: 'v1',
                          description:
                            '<p>red or hue value relative to\n                                the current color range</p>\n',
                          type: 'Number'
                        },
                        {
                          name: 'v2',
                          description:
                            '<p>green or saturation value\n                                relative to the current color range</p>\n',
                          type: 'Number'
                        },
                        {
                          name: 'v3',
                          description:
                            '<p>blue or brightness value\n                                relative to the current color range</p>\n',
                          type: 'Number'
                        },
                        {
                          name: 'alpha',
                          description: '',
                          type: 'Number',
                          optional: true
                        }
                      ],
                      return: {
                        description: '',
                        type: 'p5.Color'
                      }
                    },
                    {
                      line: 303,
                      params: [
                        {
                          name: 'value',
                          description: '<p>a color string</p>\n',
                          type: 'String'
                        }
                      ],
                      return: {
                        description: '',
                        type: 'p5.Color'
                      }
                    },
                    {
                      line: 308,
                      params: [
                        {
                          name: 'values',
                          description:
                            '<p>an array containing the red,green,blue &amp;\n                                and alpha components of the color</p>\n',
                          type: 'Number[]'
                        }
                      ],
                      return: {
                        description: '',
                        type: 'p5.Color'
                      }
                    },
                    {
                      line: 314,
                      params: [
                        {
                          name: 'color',
                          description: '',
                          type: 'p5.Color'
                        }
                      ],
                      return: {
                        description: '',
                        type: 'p5.Color'
                      }
                    }
                  ]
                },
                {
                  file: 'src/color/creating_reading.js',
                  line: 330,
                  description:
                    '<p>Extracts the green value from a color or pixel array.</p>\n',
                  itemtype: 'method',
                  name: 'green',
                  params: [
                    {
                      name: 'color',
                      description:
                        '<p><a href="#/p5.Color">p5.Color</a> object, color components,\n                                        or CSS color</p>\n',
                      type: 'p5.Color|Number[]|String'
                    }
                  ],
                  return: {
                    description: 'the green value',
                    type: 'Number'
                  },
                  example: [
                    "\n<div>\n<code>\nlet c = color(20, 75, 200); // Define color 'c'\nfill(c); // Use color variable 'c' as fill color\nrect(15, 20, 35, 60); // Draw left rectangle\n\nlet greenValue = green(c); // Get green in 'c'\nprint(greenValue); // Print \"75.0\"\nfill(0, greenValue, 0); // Use 'greenValue' in new fill\nrect(50, 20, 35, 60); // Draw right rectangle\n</code>\n</div>"
                  ],
                  alt:
                    'blue rect on left and green on right, both with black outlines & 35x60.',
                  class: 'p5',
                  module: 'Color',
                  submodule: 'Creating & Reading'
                },
                {
                  file: 'src/color/creating_reading.js',
                  line: 361,
                  description:
                    '<p>Extracts the hue value from a color or pixel array.</p>\n<p>Hue exists in both HSB and HSL. This function will return the\nHSB-normalized hue when supplied with an HSB color object (or when supplied\nwith a pixel array while the color mode is HSB), but will default to the\nHSL-normalized hue otherwise. (The values will only be different if the\nmaximum hue setting for each system is different.)</p>\n',
                  itemtype: 'method',
                  name: 'hue',
                  params: [
                    {
                      name: 'color',
                      description:
                        '<p><a href="#/p5.Color">p5.Color</a> object, color components,\n                                        or CSS color</p>\n',
                      type: 'p5.Color|Number[]|String'
                    }
                  ],
                  return: {
                    description: 'the hue',
                    type: 'Number'
                  },
                  example: [
                    '\n<div>\n<code>\nnoStroke();\ncolorMode(HSB, 255);\nlet c = color(0, 126, 255);\nfill(c);\nrect(15, 20, 35, 60);\nlet value = hue(c); // Sets \'value\' to "0"\nfill(value);\nrect(50, 20, 35, 60);\n</code>\n</div>'
                  ],
                  alt: 'salmon pink rect on left and black on right, both 35x60.',
                  class: 'p5',
                  module: 'Color',
                  submodule: 'Creating & Reading'
                },
                {
                  file: 'src/color/creating_reading.js',
                  line: 398,
                  description:
                    '<p>Blends two colors to find a third color somewhere between them. The amt\nparameter is the amount to interpolate between the two values where 0.0\nequal to the first color, 0.1 is very near the first color, 0.5 is halfway\nin between, etc. An amount below 0 will be treated as 0. Likewise, amounts\nabove 1 will be capped at 1. This is different from the behavior of <a href="#/p5/lerp">lerp()</a>,\nbut necessary because otherwise numbers outside the range will produce\nstrange and unexpected colors.\n<br><br>\nThe way that colours are interpolated depends on the current color mode.</p>\n',
                  itemtype: 'method',
                  name: 'lerpColor',
                  params: [
                    {
                      name: 'c1',
                      description: '<p>interpolate from this color</p>\n',
                      type: 'p5.Color'
                    },
                    {
                      name: 'c2',
                      description: '<p>interpolate to this color</p>\n',
                      type: 'p5.Color'
                    },
                    {
                      name: 'amt',
                      description: '<p>number between 0 and 1</p>\n',
                      type: 'Number'
                    }
                  ],
                  return: {
                    description: 'interpolated color',
                    type: 'p5.Color'
                  },
                  example: [
                    '\n<div>\n<code>\ncolorMode(RGB);\nstroke(255);\nbackground(51);\nlet from = color(218, 165, 32);\nlet to = color(72, 61, 139);\ncolorMode(RGB); // Try changing to HSB.\nlet interA = lerpColor(from, to, 0.33);\nlet interB = lerpColor(from, to, 0.66);\nfill(from);\nrect(10, 20, 20, 60);\nfill(interA);\nrect(30, 20, 20, 60);\nfill(interB);\nrect(50, 20, 20, 60);\nfill(to);\nrect(70, 20, 20, 60);\n</code>\n</div>'
                  ],
                  alt:
                    '4 rects one tan, brown, brownish purple, purple, with white outlines & 20x60',
                  class: 'p5',
                  module: 'Color',
                  submodule: 'Creating & Reading'
                },
                {
                  file: 'src/color/creating_reading.js',
                  line: 489,
                  description:
                    '<p>Extracts the HSL lightness value from a color or pixel array.</p>\n',
                  itemtype: 'method',
                  name: 'lightness',
                  params: [
                    {
                      name: 'color',
                      description:
                        '<p><a href="#/p5.Color">p5.Color</a> object, color components,\n                                        or CSS color</p>\n',
                      type: 'p5.Color|Number[]|String'
                    }
                  ],
                  return: {
                    description: 'the lightness',
                    type: 'Number'
                  },
                  example: [
                    "\n<div>\n<code>\nnoStroke();\ncolorMode(HSL);\nlet c = color(156, 100, 50, 1);\nfill(c);\nrect(15, 20, 35, 60);\nlet value = lightness(c); // Sets 'value' to 50\nfill(value);\nrect(50, 20, 35, 60);\n</code>\n</div>"
                  ],
                  alt:
                    'light pastel green rect on left and dark grey rect on right, both 35x60.',
                  class: 'p5',
                  module: 'Color',
                  submodule: 'Creating & Reading'
                },
                {
                  file: 'src/color/creating_reading.js',
                  line: 519,
                  description: '<p>Extracts the red value from a color or pixel array.</p>\n',
                  itemtype: 'method',
                  name: 'red',
                  params: [
                    {
                      name: 'color',
                      description:
                        '<p><a href="#/p5.Color">p5.Color</a> object, color components,\n                                        or CSS color</p>\n',
                      type: 'p5.Color|Number[]|String'
                    }
                  ],
                  return: {
                    description: 'the red value',
                    type: 'Number'
                  },
                  example: [
                    "\n<div>\n<code>\nlet c = color(255, 204, 0); // Define color 'c'\nfill(c); // Use color variable 'c' as fill color\nrect(15, 20, 35, 60); // Draw left rectangle\n\nlet redValue = red(c); // Get red in 'c'\nprint(redValue); // Print \"255.0\"\nfill(redValue, 0, 0); // Use 'redValue' in new fill\nrect(50, 20, 35, 60); // Draw right rectangle\n</code>\n</div>\n\n<div class=\"norender\">\n<code>\ncolorMode(RGB, 255); // Sets the range for red, green, and blue to 255\nlet c = color(127, 255, 0);\ncolorMode(RGB, 1); // Sets the range for red, green, and blue to 1\nlet myColor = red(c);\nprint(myColor); // 0.4980392156862745\n</code>\n</div>"
                  ],
                  alt:
                    'yellow rect on left and red rect on right, both with black outlines and 35x60.\ngrey canvas',
                  class: 'p5',
                  module: 'Color',
                  submodule: 'Creating & Reading'
                },
                {
                  file: 'src/color/creating_reading.js',
                  line: 559,
                  description:
                    '<p>Extracts the saturation value from a color or pixel array.</p>\n<p>Saturation is scaled differently in HSB and HSL. This function will return\nthe HSB saturation when supplied with an HSB color object (or when supplied\nwith a pixel array while the color mode is HSB), but will default to the\nHSL saturation otherwise.</p>\n',
                  itemtype: 'method',
                  name: 'saturation',
                  params: [
                    {
                      name: 'color',
                      description:
                        '<p><a href="#/p5.Color">p5.Color</a> object, color components,\n                                        or CSS color</p>\n',
                      type: 'p5.Color|Number[]|String'
                    }
                  ],
                  return: {
                    description: 'the saturation value',
                    type: 'Number'
                  },
                  example: [
                    "\n<div>\n<code>\nnoStroke();\ncolorMode(HSB, 255);\nlet c = color(0, 126, 255);\nfill(c);\nrect(15, 20, 35, 60);\nlet value = saturation(c); // Sets 'value' to 126\nfill(value);\nrect(50, 20, 35, 60);\n</code>\n</div>"
                  ],
                  alt: 'deep pink rect on left and grey rect on right, both 35x60.',
                  class: 'p5',
                  module: 'Color',
                  submodule: 'Creating & Reading'
                },
                {
                  file: 'src/color/p5.Color.js',
                  line: 50,
                  description:
                    '<p>This function returns the color formatted as a string. This can be useful\nfor debugging, or for using p5.js with other libraries.</p>\n',
                  itemtype: 'method',
                  name: 'toString',
                  params: [
                    {
                      name: 'format',
                      description:
                        '<p>How the color string will be formatted.\nLeaving this empty formats the string as rgba(r, g, b, a).\n&#39;#rgb&#39; &#39;#rgba&#39; &#39;#rrggbb&#39; and &#39;#rrggbbaa&#39; format as hexadecimal color codes.\n&#39;rgb&#39; &#39;hsb&#39; and &#39;hsl&#39; return the color formatted in the specified color mode.\n&#39;rgba&#39; &#39;hsba&#39; and &#39;hsla&#39; are the same as above but with alpha channels.\n&#39;rgb%&#39; &#39;hsb%&#39; &#39;hsl%&#39; &#39;rgba%&#39; &#39;hsba%&#39; and &#39;hsla%&#39; format as percentages.</p>\n',
                      type: 'String',
                      optional: true
                    }
                  ],
                  return: {
                    description: 'the formatted string',
                    type: 'String'
                  },
                  example: [
                    "\n<div>\n<code>\nlet myColor;\nfunction setup() {\n  createCanvas(200, 200);\n  stroke(255);\n  myColor = color(100, 100, 250);\n  fill(myColor);\n}\n\nfunction draw() {\n  rotate(HALF_PI);\n  text(myColor.toString(), 0, -5);\n  text(myColor.toString('#rrggbb'), 0, -30);\n  text(myColor.toString('rgba%'), 0, -55);\n}\n</code>\n</div>"
                  ],
                  alt: 'canvas with text representation of color',
                  class: 'p5.Color',
                  module: 'Color',
                  submodule: 'Creating & Reading'
                },
                {
                  file: 'src/color/p5.Color.js',
                  line: 251,
                  description:
                    '<p>The setRed function sets the red component of a color.\nThe range depends on your color mode, in the default RGB mode it&#39;s between 0 and 255.</p>\n',
                  itemtype: 'method',
                  name: 'setRed',
                  params: [
                    {
                      name: 'red',
                      description: '<p>the new red value</p>\n',
                      type: 'Number'
                    }
                  ],
                  example: [
                    '\n<div>\n<code>\nlet backgroundColor;\n\nfunction setup() {\n  backgroundColor = color(100, 50, 150);\n}\n\nfunction draw() {\n  backgroundColor.setRed(128 + 128 * sin(millis() / 1000));\n  background(backgroundColor);\n}\n</code>\n</div>'
                  ],
                  alt: 'canvas with gradually changing background color',
                  class: 'p5.Color',
                  module: 'Color',
                  submodule: 'Creating & Reading'
                },
                {
                  file: 'src/color/p5.Color.js',
                  line: 280,
                  description:
                    '<p>The setGreen function sets the green component of a color.\nThe range depends on your color mode, in the default RGB mode it&#39;s between 0 and 255.</p>\n',
                  itemtype: 'method',
                  name: 'setGreen',
                  params: [
                    {
                      name: 'green',
                      description: '<p>the new green value</p>\n',
                      type: 'Number'
                    }
                  ],
                  example: [
                    '\n<div>\n<code>\nlet backgroundColor;\n\nfunction setup() {\n  backgroundColor = color(100, 50, 150);\n}\n\nfunction draw() {\n  backgroundColor.setGreen(128 + 128 * sin(millis() / 1000));\n  background(backgroundColor);\n}\n</code>\n</div>'
                  ],
                  alt: 'canvas with gradually changing background color',
                  class: 'p5.Color',
                  module: 'Color',
                  submodule: 'Creating & Reading'
                },
                {
                  file: 'src/color/p5.Color.js',
                  line: 309,
                  description:
                    '<p>The setBlue function sets the blue component of a color.\nThe range depends on your color mode, in the default RGB mode it&#39;s between 0 and 255.</p>\n',
                  itemtype: 'method',
                  name: 'setBlue',
                  params: [
                    {
                      name: 'blue',
                      description: '<p>the new blue value</p>\n',
                      type: 'Number'
                    }
                  ],
                  example: [
                    '\n<div>\n<code>\nlet backgroundColor;\n\nfunction setup() {\n  backgroundColor = color(100, 50, 150);\n}\n\nfunction draw() {\n  backgroundColor.setBlue(128 + 128 * sin(millis() / 1000));\n  background(backgroundColor);\n}\n</code>\n</div>'
                  ],
                  alt: 'canvas with gradually changing background color',
                  class: 'p5.Color',
                  module: 'Color',
                  submodule: 'Creating & Reading'
                },
                {
                  file: 'src/color/p5.Color.js',
                  line: 338,
                  description:
                    '<p>The setAlpha function sets the transparency (alpha) value of a color.\nThe range depends on your color mode, in the default RGB mode it&#39;s between 0 and 255.</p>\n',
                  itemtype: 'method',
                  name: 'setAlpha',
                  params: [
                    {
                      name: 'alpha',
                      description: '<p>the new alpha value</p>\n',
                      type: 'Number'
                    }
                  ],
                  example: [
                    '\n<div>\n<code>\nlet squareColor;\n\nfunction setup() {\n  ellipseMode(CORNERS);\n  strokeWeight(4);\n  squareColor = color(100, 50, 150);\n}\n\nfunction draw() {\n  background(255);\n\n  noFill();\n  stroke(0);\n  ellipse(10, 10, width - 10, height - 10);\n\n  squareColor.setAlpha(128 + 128 * sin(millis() / 1000));\n  fill(squareColor);\n  noStroke();\n  rect(13, 13, width - 26, height - 26);\n}\n</code>\n</div>'
                  ],
                  alt: 'circle behind a square with gradually changing opacity',
                  class: 'p5.Color',
                  module: 'Color',
                  submodule: 'Creating & Reading'
                },
                {
                  file: 'src/color/p5.Color.js',
                  line: 421,
                  description:
                    '<p>Hue is the same in HSB and HSL, but the maximum value may be different.\nThis function will return the HSB-normalized saturation when supplied with\nan HSB color object, but will default to the HSL-normalized saturation\notherwise.</p>\n',
                  class: 'p5.Color',
                  module: 'Color',
                  submodule: 'Creating & Reading'
                },
                {
                  file: 'src/color/p5.Color.js',
                  line: 452,
                  description:
                    '<p>Saturation is scaled differently in HSB and HSL. This function will return\nthe HSB saturation when supplied with an HSB color object, but will default\nto the HSL saturation otherwise.</p>\n',
                  class: 'p5.Color',
                  module: 'Color',
                  submodule: 'Creating & Reading'
                },
                {
                  file: 'src/color/p5.Color.js',
                  line: 471,
                  description: '<p>CSS named colors.</p>\n',
                  class: 'p5.Color',
                  module: 'Color',
                  submodule: 'Creating & Reading'
                },
                {
                  file: 'src/color/p5.Color.js',
                  line: 625,
                  description:
                    '<p>These regular expressions are used to build up the patterns for matching\nviable CSS color strings: fragmenting the regexes in this way increases the\nlegibility and comprehensibility of the code.</p>\n<p>Note that RGB values of .9 are not parsed by IE, but are supported here for\ncolor string consistency.</p>\n',
                  class: 'p5.Color',
                  module: 'Color',
                  submodule: 'Creating & Reading'
                },
                {
                  file: 'src/color/p5.Color.js',
                  line: 638,
                  description:
                    '<p>Full color string patterns. The capture groups are necessary.</p>\n',
                  class: 'p5.Color',
                  module: 'Color',
                  submodule: 'Creating & Reading'
                },
                {
                  file: 'src/color/p5.Color.js',
                  line: 987,
                  description:
                    '<p>For HSB and HSL, interpret the gray level as a brightness/lightness\nvalue (they are equivalent when chroma is zero). For RGB, normalize the\ngray level according to the blue maximum.</p>\n',
                  class: 'p5.Color',
                  module: 'Color',
                  submodule: 'Creating & Reading'
                },
                {
                  file: 'src/color/setting.js',
                  line: 13,
                  description:
                    '<p>The <a href="#/p5/background">background()</a> function sets the color used for the background of the\np5.js canvas. The default background is transparent. This function is\ntypically used within <a href="#/p5/draw">draw()</a> to clear the display window at the beginning\nof each frame, but it can be used inside <a href="#/p5/setup">setup()</a> to set the background on\nthe first frame of animation or if the background need only be set once.\n<br><br>\nThe color is either specified in terms of the RGB, HSB, or HSL color\ndepending on the current <a href="#/p5/colorMode">colorMode</a>. (The default color space is RGB, with\neach value in the range from 0 to 255). The alpha range by default is also 0 to 255.\n<br><br>\nIf a single string argument is provided, RGB, RGBA and Hex CSS color strings\nand all named color strings are supported. In this case, an alpha number\nvalue as a second argument is not supported, the RGBA form should be used.\n<br><br>\nA <a href="#/p5.Color">p5.Color</a> object can also be provided to set the background color.\n<br><br>\nA <a href="#/p5.Image">p5.Image</a> can also be provided to set the background image.</p>\n',
                  itemtype: 'method',
                  name: 'background',
                  chainable: 1,
                  example: [
                    "\n<div>\n<code>\n// Grayscale integer value\nbackground(51);\n</code>\n</div>\n\n<div>\n<code>\n// R, G & B integer values\nbackground(255, 204, 0);\n</code>\n</div>\n\n<div>\n<code>\n// H, S & B integer values\ncolorMode(HSB);\nbackground(255, 204, 100);\n</code>\n</div>\n\n<div>\n<code>\n// Named SVG/CSS color string\nbackground('red');\n</code>\n</div>\n\n<div>\n<code>\n// three-digit hexadecimal RGB notation\nbackground('#fae');\n</code>\n</div>\n\n<div>\n<code>\n// six-digit hexadecimal RGB notation\nbackground('#222222');\n</code>\n</div>\n\n<div>\n<code>\n// integer RGB notation\nbackground('rgb(0,255,0)');\n</code>\n</div>\n\n<div>\n<code>\n// integer RGBA notation\nbackground('rgba(0,255,0, 0.25)');\n</code>\n</div>\n\n<div>\n<code>\n// percentage RGB notation\nbackground('rgb(100%,0%,10%)');\n</code>\n</div>\n\n<div>\n<code>\n// percentage RGBA notation\nbackground('rgba(100%,0%,100%,0.5)');\n</code>\n</div>\n\n<div>\n<code>\n// p5 Color object\nbackground(color(0, 0, 255));\n</code>\n</div>"
                  ],
                  alt:
                    'canvas with darkest charcoal grey background.\ncanvas with yellow background.\ncanvas with royal blue background.\ncanvas with red background.\ncanvas with pink background.\ncanvas with black background.\ncanvas with bright green background.\ncanvas with soft green background.\ncanvas with red background.\ncanvas with light purple background.\ncanvas with blue background.',
                  class: 'p5',
                  module: 'Color',
                  submodule: 'Setting',
                  overloads: [
                    {
                      line: 13,
                      params: [
                        {
                          name: 'color',
                          description:
                            '<p>any value created by the <a href="#/p5/color">color()</a> function</p>\n',
                          type: 'p5.Color'
                        }
                      ],
                      chainable: 1
                    },
                    {
                      line: 129,
                      params: [
                        {
                          name: 'colorstring',
                          description:
                            '<p>color string, possible formats include: integer\n                        rgb() or rgba(), percentage rgb() or rgba(),\n                        3-digit hex, 6-digit hex</p>\n',
                          type: 'String'
                        },
                        {
                          name: 'a',
                          description:
                            '<p>opacity of the background relative to current\n                            color range (default is 0-255)</p>\n',
                          type: 'Number',
                          optional: true
                        }
                      ],
                      chainable: 1
                    },
                    {
                      line: 139,
                      params: [
                        {
                          name: 'gray',
                          description: '<p>specifies a value between white and black</p>\n',
                          type: 'Number'
                        },
                        {
                          name: 'a',
                          description: '',
                          type: 'Number',
                          optional: true
                        }
                      ],
                      chainable: 1
                    },
                    {
                      line: 146,
                      params: [
                        {
                          name: 'v1',
                          description:
                            '<p>red or hue value (depending on the current color\n                       mode)</p>\n',
                          type: 'Number'
                        },
                        {
                          name: 'v2',
                          description:
                            '<p>green or saturation value (depending on the current\n                       color mode)</p>\n',
                          type: 'Number'
                        },
                        {
                          name: 'v3',
                          description:
                            '<p>blue or brightness value (depending on the current\n                       color mode)</p>\n',
                          type: 'Number'
                        },
                        {
                          name: 'a',
                          description: '',
                          type: 'Number',
                          optional: true
                        }
                      ],
                      chainable: 1
                    },
                    {
                      line: 158,
                      params: [
                        {
                          name: 'values',
                          description:
                            '<p>an array containing the red, green, blue\n                                and alpha components of the color</p>\n',
                          type: 'Number[]'
                        }
                      ],
                      chainable: 1
                    },
                    {
                      line: 165,
                      params: [
                        {
                          name: 'image',
                          description:
                            '<p>image created with <a href="#/p5/loadImage">loadImage()</a> or <a href="#/p5/createImage">createImage()</a>,\n                            to set as background\n                            (must be same size as the sketch window)</p>\n',
                          type: 'p5.Image'
                        },
                        {
                          name: 'a',
                          description: '',
                          type: 'Number',
                          optional: true
                        }
                      ],
                      chainable: 1
                    }
                  ]
                },
                {
                  file: 'src/color/setting.js',
                  line: 179,
                  description:
                    '<p>Clears the pixels within a buffer. This function only clears the canvas.\nIt will not clear objects created by createX() methods such as\n<a href="#/p5/createVideo">createVideo()</a> or <a href="#/p5/createDiv">createDiv()</a>.\nUnlike the main graphics context, pixels in additional graphics areas created\nwith <a href="#/p5/createGraphics">createGraphics()</a> can be entirely\nor partially transparent. This function clears everything to make all of\nthe pixels 100% transparent.</p>\n',
                  itemtype: 'method',
                  name: 'clear',
                  chainable: 1,
                  example: [
                    '\n<div>\n<code>\n// Clear the screen on mouse press.\nfunction setup() {\n  createCanvas(100, 100);\n}\n\nfunction draw() {\n  ellipse(mouseX, mouseY, 20, 20);\n}\n\nfunction mousePressed() {\n  clear();\n}\n</code>\n</div>'
                  ],
                  alt:
                    '20x20 white ellipses are continually drawn at mouse x and y coordinates.',
                  class: 'p5',
                  module: 'Color',
                  submodule: 'Setting'
                },
                {
                  file: 'src/color/setting.js',
                  line: 218,
                  description:
                    '<p><a href="#/p5/colorMode">colorMode()</a> changes the way p5.js interprets color data. By default, the\nparameters for <a href="#/p5/fill">fill()</a>, <a href="#/p5/stroke">stroke()</a>, <a href="#/p5/background">background()</a>, and <a href="#/p5/color">color()</a> are defined by\nvalues between 0 and 255 using the RGB color model. This is equivalent to\nsetting colorMode(RGB, 255). Setting colorMode(HSB) lets you use the HSB\nsystem instead. By default, this is colorMode(HSB, 360, 100, 100, 1). You\ncan also use HSL.\n<br><br>\nNote: existing color objects remember the mode that they were created in,\nso you can change modes as you like without affecting their appearance.</p>\n',
                  itemtype: 'method',
                  name: 'colorMode',
                  chainable: 1,
                  example: [
                    '\n<div>\n<code>\nnoStroke();\ncolorMode(RGB, 100);\nfor (let i = 0; i < 100; i++) {\n  for (let j = 0; j < 100; j++) {\n    stroke(i, j, 0);\n    point(i, j);\n  }\n}\n</code>\n</div>\n\n<div>\n<code>\nnoStroke();\ncolorMode(HSB, 100);\nfor (let i = 0; i < 100; i++) {\n  for (let j = 0; j < 100; j++) {\n    stroke(i, j, 100);\n    point(i, j);\n  }\n}\n</code>\n</div>\n\n<div>\n<code>\ncolorMode(RGB, 255);\nlet c = color(127, 255, 0);\n\ncolorMode(RGB, 1);\nlet myColor = c._getRed();\ntext(myColor, 10, 10, 80, 80);\n</code>\n</div>\n\n<div>\n<code>\nnoFill();\ncolorMode(RGB, 255, 255, 255, 1);\nbackground(255);\n\nstrokeWeight(4);\nstroke(255, 0, 10, 0.3);\nellipse(40, 40, 50, 50);\nellipse(50, 50, 40, 40);\n</code>\n</div>'
                  ],
                  alt:
                    'Green to red gradient from bottom L to top R. shading originates from top left.\nRainbow gradient from left to right. Brightness increasing to white at top.\nunknown image.\n50x50 ellipse at middle L & 40x40 ellipse at center. Translucent pink outlines.',
                  class: 'p5',
                  module: 'Color',
                  submodule: 'Setting',
                  overloads: [
                    {
                      line: 218,
                      params: [
                        {
                          name: 'mode',
                          description:
                            '<p>either RGB, HSB or HSL, corresponding to\n                         Red/Green/Blue and Hue/Saturation/Brightness\n                         (or Lightness)</p>\n',
                          type: 'Constant'
                        },
                        {
                          name: 'max',
                          description: '<p>range for all values</p>\n',
                          type: 'Number',
                          optional: true
                        }
                      ],
                      chainable: 1
                    },
                    {
                      line: 295,
                      params: [
                        {
                          name: 'mode',
                          description: '',
                          type: 'Constant'
                        },
                        {
                          name: 'max1',
                          description:
                            '<p>range for the red or hue depending on the\n                             current color mode</p>\n',
                          type: 'Number'
                        },
                        {
                          name: 'max2',
                          description:
                            '<p>range for the green or saturation depending\n                             on the current color mode</p>\n',
                          type: 'Number'
                        },
                        {
                          name: 'max3',
                          description:
                            '<p>range for the blue or brightness/lightness\n                             depending on the current color mode</p>\n',
                          type: 'Number'
                        },
                        {
                          name: 'maxA',
                          description: '<p>range for the alpha</p>\n',
                          type: 'Number',
                          optional: true
                        }
                      ],
                      chainable: 1
                    }
                  ]
                },
                {
                  file: 'src/color/setting.js',
                  line: 339,
                  description:
                    '<p>Sets the color used to fill shapes. For example, if you run\nfill(204, 102, 0), all shapes drawn after the fill command will be filled with the color orange. This\ncolor is either specified in terms of the RGB or HSB color depending on\nthe current <a href="#/p5/colorMode">colorMode()</a>. (The default color space is RGB, with each value\nin the range from 0 to 255). The alpha range by default is also 0 to 255.\n<br><br>\nIf a single string argument is provided, RGB, RGBA and Hex CSS color strings\nand all named color strings are supported. In this case, an alpha number\nvalue as a second argument is not supported, the RGBA form should be used.\n<br><br>\nA p5 <a href="#/p5.Color">Color</a> object can also be provided to set the fill color.</p>\n',
                  itemtype: 'method',
                  name: 'fill',
                  chainable: 1,
                  example: [
                    "\n<div>\n<code>\n// Grayscale integer value\nfill(51);\nrect(20, 20, 60, 60);\n</code>\n</div>\n\n<div>\n<code>\n// R, G & B integer values\nfill(255, 204, 0);\nrect(20, 20, 60, 60);\n</code>\n</div>\n\n<div>\n<code>\n// H, S & B integer values\ncolorMode(HSB);\nfill(255, 204, 100);\nrect(20, 20, 60, 60);\n</code>\n</div>\n\n<div>\n<code>\n// Named SVG/CSS color string\nfill('red');\nrect(20, 20, 60, 60);\n</code>\n</div>\n\n<div>\n<code>\n// three-digit hexadecimal RGB notation\nfill('#fae');\nrect(20, 20, 60, 60);\n</code>\n</div>\n\n<div>\n<code>\n// six-digit hexadecimal RGB notation\nfill('#222222');\nrect(20, 20, 60, 60);\n</code>\n</div>\n\n<div>\n<code>\n// integer RGB notation\nfill('rgb(0,255,0)');\nrect(20, 20, 60, 60);\n</code>\n</div>\n\n<div>\n<code>\n// integer RGBA notation\nfill('rgba(0,255,0, 0.25)');\nrect(20, 20, 60, 60);\n</code>\n</div>\n\n<div>\n<code>\n// percentage RGB notation\nfill('rgb(100%,0%,10%)');\nrect(20, 20, 60, 60);\n</code>\n</div>\n\n<div>\n<code>\n// percentage RGBA notation\nfill('rgba(100%,0%,100%,0.5)');\nrect(20, 20, 60, 60);\n</code>\n</div>\n\n<div>\n<code>\n// p5 Color object\nfill(color(0, 0, 255));\nrect(20, 20, 60, 60);\n</code>\n</div>"
                  ],
                  alt:
                    '60x60 dark charcoal grey rect with black outline in center of canvas.\n60x60 yellow rect with black outline in center of canvas.\n60x60 royal blue rect with black outline in center of canvas.\n60x60 red rect with black outline in center of canvas.\n60x60 pink rect with black outline in center of canvas.\n60x60 black rect with black outline in center of canvas.\n60x60 light green rect with black outline in center of canvas.\n60x60 soft green rect with black outline in center of canvas.\n60x60 red rect with black outline in center of canvas.\n60x60 dark fuchsia rect with black outline in center of canvas.\n60x60 blue rect with black outline in center of canvas.',
                  class: 'p5',
                  module: 'Color',
                  submodule: 'Setting',
                  overloads: [
                    {
                      line: 339,
                      params: [
                        {
                          name: 'v1',
                          description:
                            '<p>red or hue value relative to\n                                the current color range</p>\n',
                          type: 'Number'
                        },
                        {
                          name: 'v2',
                          description:
                            '<p>green or saturation value\n                                relative to the current color range</p>\n',
                          type: 'Number'
                        },
                        {
                          name: 'v3',
                          description:
                            '<p>blue or brightness value\n                                relative to the current color range</p>\n',
                          type: 'Number'
                        },
                        {
                          name: 'alpha',
                          description: '',
                          type: 'Number',
                          optional: true
                        }
                      ],
                      chainable: 1
                    },
                    {
                      line: 464,
                      params: [
                        {
                          name: 'value',
                          description: '<p>a color string</p>\n',
                          type: 'String'
                        }
                      ],
                      chainable: 1
                    },
                    {
                      line: 470,
                      params: [
                        {
                          name: 'gray',
                          description: '<p>a gray value</p>\n',
                          type: 'Number'
                        },
                        {
                          name: 'alpha',
                          description: '',
                          type: 'Number',
                          optional: true
                        }
                      ],
                      chainable: 1
                    },
                    {
                      line: 477,
                      params: [
                        {
                          name: 'values',
                          description:
                            '<p>an array containing the red,green,blue &amp;\n                                and alpha components of the color</p>\n',
                          type: 'Number[]'
                        }
                      ],
                      chainable: 1
                    },
                    {
                      line: 484,
                      params: [
                        {
                          name: 'color',
                          description: '<p>the fill color</p>\n',
                          type: 'p5.Color'
                        }
                      ],
                      chainable: 1
                    }
                  ]
                },
                {
                  file: 'src/color/setting.js',
                  line: 496,
                  description:
                    '<p>Disables filling geometry. If both <a href="#/p5/noStroke">noStroke()</a> and <a href="#/p5/noFill">noFill()</a> are called,\nnothing will be drawn to the screen.</p>\n',
                  itemtype: 'method',
                  name: 'noFill',
                  chainable: 1,
                  example: [
                    "\n<div>\n<code>\nrect(15, 10, 55, 55);\nnoFill();\nrect(20, 20, 60, 60);\n</code>\n</div>\n\n<div modernizr='webgl'>\n<code>\nfunction setup() {\n  createCanvas(100, 100, WEBGL);\n}\n\nfunction draw() {\n  background(0);\n  noFill();\n  stroke(100, 100, 240);\n  rotateX(frameCount * 0.01);\n  rotateY(frameCount * 0.01);\n  box(45, 45, 45);\n}\n</code>\n</div>"
                  ],
                  alt:
                    'white rect top middle and noFill rect center. Both 60x60 with black outlines.\nblack canvas with purple cube wireframe spinning',
                  class: 'p5',
                  module: 'Color',
                  submodule: 'Setting'
                },
                {
                  file: 'src/color/setting.js',
                  line: 537,
                  description:
                    '<p>Disables drawing the stroke (outline). If both <a href="#/p5/noStroke">noStroke()</a> and <a href="#/p5/noFill">noFill()</a>\nare called, nothing will be drawn to the screen.</p>\n',
                  itemtype: 'method',
                  name: 'noStroke',
                  chainable: 1,
                  example: [
                    "\n<div>\n<code>\nnoStroke();\nrect(20, 20, 60, 60);\n</code>\n</div>\n\n<div modernizr='webgl'>\n<code>\nfunction setup() {\n  createCanvas(100, 100, WEBGL);\n}\n\nfunction draw() {\n  background(0);\n  noStroke();\n  fill(240, 150, 150);\n  rotateX(frameCount * 0.01);\n  rotateY(frameCount * 0.01);\n  box(45, 45, 45);\n}\n</code>\n</div>"
                  ],
                  alt:
                    '60x60 white rect at center. no outline.\nblack canvas with pink cube spinning',
                  class: 'p5',
                  module: 'Color',
                  submodule: 'Setting'
                },
                {
                  file: 'src/color/setting.js',
                  line: 577,
                  description:
                    '<p>Sets the color used to draw lines and borders around shapes. This color\nis either specified in terms of the RGB or HSB color depending on the\ncurrent <a href="#/p5/colorMode">colorMode()</a> (the default color space is RGB, with each value in\nthe range from 0 to 255). The alpha range by default is also 0 to 255.\n<br><br>\nIf a single string argument is provided, RGB, RGBA and Hex CSS color\nstrings and all named color strings are supported. In this case, an alpha\nnumber value as a second argument is not supported, the RGBA form should be\nused.\n<br><br>\nA p5 <a href="#/p5.Color">Color</a> object can also be provided to set the stroke color.</p>\n',
                  itemtype: 'method',
                  name: 'stroke',
                  chainable: 1,
                  example: [
                    "\n<div>\n<code>\n// Grayscale integer value\nstrokeWeight(4);\nstroke(51);\nrect(20, 20, 60, 60);\n</code>\n</div>\n\n<div>\n<code>\n// R, G & B integer values\nstroke(255, 204, 0);\nstrokeWeight(4);\nrect(20, 20, 60, 60);\n</code>\n</div>\n\n<div>\n<code>\n// H, S & B integer values\ncolorMode(HSB);\nstrokeWeight(4);\nstroke(255, 204, 100);\nrect(20, 20, 60, 60);\n</code>\n</div>\n\n<div>\n<code>\n// Named SVG/CSS color string\nstroke('red');\nstrokeWeight(4);\nrect(20, 20, 60, 60);\n</code>\n</div>\n\n<div>\n<code>\n// three-digit hexadecimal RGB notation\nstroke('#fae');\nstrokeWeight(4);\nrect(20, 20, 60, 60);\n</code>\n</div>\n\n<div>\n<code>\n// six-digit hexadecimal RGB notation\nstroke('#222222');\nstrokeWeight(4);\nrect(20, 20, 60, 60);\n</code>\n</div>\n\n<div>\n<code>\n// integer RGB notation\nstroke('rgb(0,255,0)');\nstrokeWeight(4);\nrect(20, 20, 60, 60);\n</code>\n</div>\n\n<div>\n<code>\n// integer RGBA notation\nstroke('rgba(0,255,0,0.25)');\nstrokeWeight(4);\nrect(20, 20, 60, 60);\n</code>\n</div>\n\n<div>\n<code>\n// percentage RGB notation\nstroke('rgb(100%,0%,10%)');\nstrokeWeight(4);\nrect(20, 20, 60, 60);\n</code>\n</div>\n\n<div>\n<code>\n// percentage RGBA notation\nstroke('rgba(100%,0%,100%,0.5)');\nstrokeWeight(4);\nrect(20, 20, 60, 60);\n</code>\n</div>\n\n<div>\n<code>\n// p5 Color object\nstroke(color(0, 0, 255));\nstrokeWeight(4);\nrect(20, 20, 60, 60);\n</code>\n</div>"
                  ],
                  alt:
                    '60x60 white rect at center. Dark charcoal grey outline.\n60x60 white rect at center. Yellow outline.\n60x60 white rect at center. Royal blue outline.\n60x60 white rect at center. Red outline.\n60x60 white rect at center. Pink outline.\n60x60 white rect at center. Black outline.\n60x60 white rect at center. Bright green outline.\n60x60 white rect at center. Soft green outline.\n60x60 white rect at center. Red outline.\n60x60 white rect at center. Dark fuchsia outline.\n60x60 white rect at center. Blue outline.',
                  class: 'p5',
                  module: 'Color',
                  submodule: 'Setting',
                  overloads: [
                    {
                      line: 577,
                      params: [
                        {
                          name: 'v1',
                          description:
                            '<p>red or hue value relative to\n                                the current color range</p>\n',
                          type: 'Number'
                        },
                        {
                          name: 'v2',
                          description:
                            '<p>green or saturation value\n                                relative to the current color range</p>\n',
                          type: 'Number'
                        },
                        {
                          name: 'v3',
                          description:
                            '<p>blue or brightness value\n                                relative to the current color range</p>\n',
                          type: 'Number'
                        },
                        {
                          name: 'alpha',
                          description: '',
                          type: 'Number',
                          optional: true
                        }
                      ],
                      chainable: 1
                    },
                    {
                      line: 716,
                      params: [
                        {
                          name: 'value',
                          description: '<p>a color string</p>\n',
                          type: 'String'
                        }
                      ],
                      chainable: 1
                    },
                    {
                      line: 722,
                      params: [
                        {
                          name: 'gray',
                          description: '<p>a gray value</p>\n',
                          type: 'Number'
                        },
                        {
                          name: 'alpha',
                          description: '',
                          type: 'Number',
                          optional: true
                        }
                      ],
                      chainable: 1
                    },
                    {
                      line: 729,
                      params: [
                        {
                          name: 'values',
                          description:
                            '<p>an array containing the red,green,blue &amp;\n                                and alpha components of the color</p>\n',
                          type: 'Number[]'
                        }
                      ],
                      chainable: 1
                    },
                    {
                      line: 736,
                      params: [
                        {
                          name: 'color',
                          description: '<p>the stroke color</p>\n',
                          type: 'p5.Color'
                        }
                      ],
                      chainable: 1
                    }
                  ]
                },
                {
                  file: 'src/color/setting.js',
                  line: 749,
                  description:
                    '<p>All drawing that follows <a href="#/p5/erase">erase()</a> will subtract from the canvas.\nErased areas will reveal the web page underneath the canvas.\nErasing can be canceled with <a href="#/p5/noErase">noErase()</a>.\n<br><br>\nDrawing done with <a href="#/p5/image">image()</a>\nand <a href="#/p5/background">background()</a> will not be affected by <a href="#/p5/erase">erase()</a>\n<br><br></p>\n',
                  itemtype: 'method',
                  name: 'erase',
                  params: [
                    {
                      name: 'strengthFill',
                      description:
                        '<p>A number (0-255) for the strength of erasing for a shape&#39;s fill.\n                                       This will default to 255 when no argument is given, which\n                                       is full strength.</p>\n',
                      type: 'Number',
                      optional: true
                    },
                    {
                      name: 'strengthStroke',
                      description:
                        '<p>A number (0-255) for the strength of erasing for a shape&#39;s stroke.\n                                       This will default to 255 when no argument is given, which\n                                       is full strength.</p>\n',
                      type: 'Number',
                      optional: true
                    }
                  ],
                  chainable: 1,
                  example: [
                    "\n<div>\n<code>\nbackground(100, 100, 250);\nfill(250, 100, 100);\nrect(20, 20, 60, 60);\nerase();\nellipse(25, 30, 30);\nnoErase();\n</code>\n</div>\n\n<div>\n<code>\nbackground(150, 250, 150);\nfill(100, 100, 250);\nrect(20, 20, 60, 60);\nstrokeWeight(5);\nerase(150, 255);\ntriangle(50, 10, 70, 50, 90, 10);\nnoErase();\n</code>\n</div>\n\n<div>\n<code>\nfunction setup() {\n  smooth();\n  createCanvas(100, 100, WEBGL);\n  // Make a &lt;p&gt; element and put it behind the canvas\n  let p = createP('I am a dom element');\n  p.center();\n  p.style('font-size', '20px');\n  p.style('text-align', 'center');\n  p.style('z-index', '-9999');\n}\n\nfunction draw() {\n  background(250, 250, 150);\n  fill(15, 195, 185);\n  noStroke();\n  sphere(30);\n  erase();\n  rotateY(frameCount * 0.02);\n  translate(0, 0, 40);\n  torus(15, 5);\n  noErase();\n}\n</code>\n</div>"
                  ],
                  alt:
                    '60x60 centered pink rect, purple background. Elliptical area in top-left of rect is erased white.\n60x60 centered purple rect, mint green background. Triangle in top-right is partially erased with fully erased outline.\n60x60 centered teal sphere, yellow background. Torus rotating around sphere erases to reveal black text underneath.',
                  class: 'p5',
                  module: 'Color',
                  submodule: 'Setting'
                },
                {
                  file: 'src/color/setting.js',
                  line: 829,
                  description:
                    '<p>Ends erasing that was started with <a href="#/p5/erase">erase()</a>.\nThe <a href="#/p5/fill">fill()</a>, <a href="#/p5/stroke">stroke()</a>, and\n<a href="#/p5/blendMode">blendMode()</a> settings will return to what they were\nprior to calling <a href="#/p5/erase">erase()</a>.</p>\n',
                  itemtype: 'method',
                  name: 'noErase',
                  chainable: 1,
                  example: [
                    '\n<div>\n<code>\nbackground(235, 145, 15);\nnoStroke();\nfill(30, 45, 220);\nrect(30, 10, 10, 80);\nerase();\nellipse(50, 50, 60);\nnoErase();\nrect(70, 10, 10, 80);\n</code>\n</div>'
                  ],
                  alt:
                    'Orange background, with two tall blue rectangles. A centered ellipse erased the first blue rect but not the second.',
                  class: 'p5',
                  module: 'Color',
                  submodule: 'Setting'
                },
                {
                  file: 'src/core/shape/2d_primitives.js',
                  line: 14,
                  description:
                    '<p>This function does 3 things:</p>\n<ol>\n<li><p>Bounds the desired start/stop angles for an arc (in radians) so that:</p>\n<pre><code>0 &lt;= start &lt; TWO_PI ;    start &lt;= stop &lt; start + TWO_PI</code></pre><p>This means that the arc rendering functions don&#39;t have to be concerned\nwith what happens if stop is smaller than start, or if the arc &#39;goes\nround more than once&#39;, etc.: they can just start at start and increase\nuntil stop and the correct arc will be drawn.</p>\n</li>\n<li><p>Optionally adjusts the angles within each quadrant to counter the naive\nscaling of the underlying ellipse up from the unit circle.  Without\nthis, the angles become arbitrary when width != height: 45 degrees\nmight be drawn at 5 degrees on a &#39;wide&#39; ellipse, or at 85 degrees on\na &#39;tall&#39; ellipse.</p>\n</li>\n<li><p>Flags up when start and stop correspond to the same place on the\nunderlying ellipse.  This is useful if you want to do something special\nthere (like rendering a whole ellipse instead).</p>\n</li>\n</ol>\n',
                  class: 'p5',
                  module: 'Shape',
                  submodule: '2D Primitives'
                },
                {
                  file: 'src/core/shape/2d_primitives.js',
                  line: 100,
                  description:
                    '<p>Draw an arc to the screen. If called with only x, y, w, h, start, and\nstop, the arc will be drawn and filled as an open pie segment. If a mode parameter is provided, the arc\nwill be filled like an open semi-circle (OPEN) , a closed semi-circle (CHORD), or as a closed pie segment (PIE). The\norigin may be changed with the <a href="#/p5/ellipseMode">ellipseMode()</a> function.<br><br>\nThe arc is always drawn clockwise from wherever start falls to wherever stop falls on the ellipse.\nAdding or subtracting TWO_PI to either angle does not change where they fall.\nIf both start and stop fall at the same place, a full ellipse will be drawn. Be aware that the the\ny-axis increases in the downward direction, therefore angles are measured clockwise from the positive\nx-direction (&quot;3 o&#39;clock&quot;).</p>\n',
                  itemtype: 'method',
                  name: 'arc',
                  params: [
                    {
                      name: 'x',
                      description: '<p>x-coordinate of the arc&#39;s ellipse</p>\n',
                      type: 'Number'
                    },
                    {
                      name: 'y',
                      description: '<p>y-coordinate of the arc&#39;s ellipse</p>\n',
                      type: 'Number'
                    },
                    {
                      name: 'w',
                      description: '<p>width of the arc&#39;s ellipse by default</p>\n',
                      type: 'Number'
                    },
                    {
                      name: 'h',
                      description: '<p>height of the arc&#39;s ellipse by default</p>\n',
                      type: 'Number'
                    },
                    {
                      name: 'start',
                      description: '<p>angle to start the arc, specified in radians</p>\n',
                      type: 'Number'
                    },
                    {
                      name: 'stop',
                      description: '<p>angle to stop the arc, specified in radians</p>\n',
                      type: 'Number'
                    },
                    {
                      name: 'mode',
                      description:
                        '<p>optional parameter to determine the way of drawing\n                        the arc. either CHORD, PIE or OPEN</p>\n',
                      type: 'Constant',
                      optional: true
                    },
                    {
                      name: 'detail',
                      description:
                        '<p>optional parameter for WebGL mode only. This is to\n                        specify the number of vertices that makes up the\n                        perimeter of the arc. Default value is 25.</p>\n',
                      type: 'Number',
                      optional: true
                    }
                  ],
                  chainable: 1,
                  example: [
                    '\n<div>\n<code>\narc(50, 55, 50, 50, 0, HALF_PI);\nnoFill();\narc(50, 55, 60, 60, HALF_PI, PI);\narc(50, 55, 70, 70, PI, PI + QUARTER_PI);\narc(50, 55, 80, 80, PI + QUARTER_PI, TWO_PI);\n</code>\n</div>\n\n<div>\n<code>\narc(50, 50, 80, 80, 0, PI + QUARTER_PI);\n</code>\n</div>\n\n<div>\n<code>\narc(50, 50, 80, 80, 0, PI + QUARTER_PI, OPEN);\n</code>\n</div>\n\n<div>\n<code>\narc(50, 50, 80, 80, 0, PI + QUARTER_PI, CHORD);\n</code>\n</div>\n\n<div>\n<code>\narc(50, 50, 80, 80, 0, PI + QUARTER_PI, PIE);\n</code>\n</div>'
                  ],
                  alt:
                    'shattered outline of an ellipse with a quarter of a white circle bottom-right.\nwhite ellipse with top right quarter missing.\nwhite ellipse with black outline with top right missing.\nwhite ellipse with top right missing with black outline around shape.\nwhite ellipse with top right quarter missing with black outline around the shape.',
                  class: 'p5',
                  module: 'Shape',
                  submodule: '2D Primitives'
                },
                {
                  file: 'src/core/shape/2d_primitives.js',
                  line: 211,
                  description:
                    '<p>Draws an ellipse (oval) to the screen. An ellipse with equal width and\nheight is a circle. By default, the first two parameters set the location,\nand the third and fourth parameters set the shape&#39;s width and height. If\nno height is specified, the value of width is used for both the width and\nheight. If a negative height or width is specified, the absolute value is taken.\nThe origin may be changed with the <a href="#/p5/ellipseMode">ellipseMode()</a> function.</p>\n',
                  itemtype: 'method',
                  name: 'ellipse',
                  chainable: 1,
                  example: ['\n<div>\n<code>\nellipse(56, 46, 55, 55);\n</code>\n</div>'],
                  alt:
                    'white ellipse with black outline in middle-right of canvas that is 55x55.',
                  class: 'p5',
                  module: 'Shape',
                  submodule: '2D Primitives',
                  overloads: [
                    {
                      line: 211,
                      params: [
                        {
                          name: 'x',
                          description: '<p>x-coordinate of the ellipse.</p>\n',
                          type: 'Number'
                        },
                        {
                          name: 'y',
                          description: '<p>y-coordinate of the ellipse.</p>\n',
                          type: 'Number'
                        },
                        {
                          name: 'w',
                          description: '<p>width of the ellipse.</p>\n',
                          type: 'Number'
                        },
                        {
                          name: 'h',
                          description: '<p>height of the ellipse.</p>\n',
                          type: 'Number',
                          optional: true
                        }
                      ],
                      chainable: 1
                    },
                    {
                      line: 236,
                      params: [
                        {
                          name: 'x',
                          description: '',
                          type: 'Number'
                        },
                        {
                          name: 'y',
                          description: '',
                          type: 'Number'
                        },
                        {
                          name: 'w',
                          description: '',
                          type: 'Number'
                        },
                        {
                          name: 'h',
                          description: '',
                          type: 'Number'
                        },
                        {
                          name: 'detail',
                          description:
                            '<p>number of radial sectors to draw (for WebGL mode)</p>\n',
                          type: 'Integer'
                        }
                      ]
                    }
                  ]
                },
                {
                  file: 'src/core/shape/2d_primitives.js',
                  line: 271,
                  description:
                    '<p>Draws a circle to the screen. A circle is a simple closed shape.\nIt is the set of all points in a plane that are at a given distance from a given point, the centre.\nThis function is a special case of the ellipse() function, where the width and height of the ellipse are the same.\nHeight and width of the ellipse correspond to the diameter of the circle.\nBy default, the first two parameters set the location of the centre of the circle, the third sets the diameter of the circle.</p>\n',
                  itemtype: 'method',
                  name: 'circle',
                  params: [
                    {
                      name: 'x',
                      description: '<p>x-coordinate of the centre of the circle.</p>\n',
                      type: 'Number'
                    },
                    {
                      name: 'y',
                      description: '<p>y-coordinate of the centre of the circle.</p>\n',
                      type: 'Number'
                    },
                    {
                      name: 'd',
                      description: '<p>diameter of the circle.</p>\n',
                      type: 'Number'
                    }
                  ],
                  chainable: 1,
                  example: [
                    '\n<div>\n<code>\n// Draw a circle at location (30, 30) with a diameter of 20.\ncircle(30, 30, 20);\n</code>\n</div>'
                  ],
                  alt: 'white circle with black outline in mid of canvas that is 55x55.',
                  class: 'p5',
                  module: 'Shape',
                  submodule: '2D Primitives'
                },
                {
                  file: 'src/core/shape/2d_primitives.js',
                  line: 301,
                  description:
                    '<p>Draws a line (a direct path between two points) to the screen. The version\nof <a href="#/p5/line">line()</a> with four parameters draws the line in 2D. To color a line, use\nthe <a href="#/p5/stroke">stroke()</a> function. A line cannot be filled, therefore the <a href="#/p5/fill">fill()</a>\nfunction will not affect the color of a line. 2D lines are drawn with a\nwidth of one pixel by default, but this can be changed with the\n<a href="#/p5/strokeWeight">strokeWeight()</a> function.</p>\n',
                  itemtype: 'method',
                  name: 'line',
                  chainable: 1,
                  example: [
                    '\n<div>\n<code>\nline(30, 20, 85, 75);\n</code>\n</div>\n\n<div>\n<code>\nline(30, 20, 85, 20);\nstroke(126);\nline(85, 20, 85, 75);\nstroke(255);\nline(85, 75, 30, 75);\n</code>\n</div>'
                  ],
                  alt:
                    'line 78 pixels long running from mid-top to bottom-right of canvas.\n3 lines of various stroke sizes. Form top, bottom and right sides of a square.',
                  class: 'p5',
                  module: 'Shape',
                  submodule: '2D Primitives',
                  overloads: [
                    {
                      line: 301,
                      params: [
                        {
                          name: 'x1',
                          description: '<p>the x-coordinate of the first point</p>\n',
                          type: 'Number'
                        },
                        {
                          name: 'y1',
                          description: '<p>the y-coordinate of the first point</p>\n',
                          type: 'Number'
                        },
                        {
                          name: 'x2',
                          description: '<p>the x-coordinate of the second point</p>\n',
                          type: 'Number'
                        },
                        {
                          name: 'y2',
                          description: '<p>the y-coordinate of the second point</p>\n',
                          type: 'Number'
                        }
                      ],
                      chainable: 1
                    },
                    {
                      line: 337,
                      params: [
                        {
                          name: 'x1',
                          description: '',
                          type: 'Number'
                        },
                        {
                          name: 'y1',
                          description: '',
                          type: 'Number'
                        },
                        {
                          name: 'z1',
                          description: '<p>the z-coordinate of the first point</p>\n',
                          type: 'Number'
                        },
                        {
                          name: 'x2',
                          description: '',
                          type: 'Number'
                        },
                        {
                          name: 'y2',
                          description: '',
                          type: 'Number'
                        },
                        {
                          name: 'z2',
                          description: '<p>the z-coordinate of the second point</p>\n',
                          type: 'Number'
                        }
                      ],
                      chainable: 1
                    }
                  ]
                },
                {
                  file: 'src/core/shape/2d_primitives.js',
                  line: 357,
                  description:
                    '<p>Draws a point, a coordinate in space at the dimension of one pixel.\nThe first parameter is the horizontal value for the point, the second\nvalue is the vertical value for the point. The color of the point is\nchanged with the <a href="#/p5/stroke">stroke()</a> function. The size of the point\nis changed with the <a href="#/p5/strokeWeight">strokeWeight()</a> function.</p>\n',
                  itemtype: 'method',
                  name: 'point',
                  chainable: 1,
                  example: [
                    "\n<div>\n<code>\npoint(30, 20);\npoint(85, 20);\npoint(85, 75);\npoint(30, 75);\n</code>\n</div>\n\n<div>\n<code>\nstroke('purple'); // Change the color\nstrokeWeight(10); // Make the points 10 pixels in size\npoint(30, 20);\npoint(85, 20);\npoint(85, 75);\npoint(30, 75);\n</code>\n</div>\n\n<div>\n<code>\nlet a = createVector(10, 10);\npoint(a);\nlet b = createVector(10, 20);\npoint(b);\npoint(createVector(20, 10));\npoint(createVector(20, 20));\n</code>\n</div>"
                  ],
                  alt:
                    '4 points centered in the middle-right of the canvas.\n4 large purple points centered in the middle-right of the canvas.\nVertices of a square of length 10 pixels towards the top-left of the canvas.',
                  class: 'p5',
                  module: 'Shape',
                  submodule: '2D Primitives',
                  overloads: [
                    {
                      line: 357,
                      params: [
                        {
                          name: 'x',
                          description: '<p>the x-coordinate</p>\n',
                          type: 'Number'
                        },
                        {
                          name: 'y',
                          description: '<p>the y-coordinate</p>\n',
                          type: 'Number'
                        },
                        {
                          name: 'z',
                          description: '<p>the z-coordinate (for WebGL mode)</p>\n',
                          type: 'Number',
                          optional: true
                        }
                      ],
                      chainable: 1
                    },
                    {
                      line: 407,
                      params: [
                        {
                          name: 'coordinate_vector',
                          description: '<p>the coordinate vector</p>\n',
                          type: 'p5.Vector'
                        }
                      ],
                      chainable: 1
                    }
                  ]
                },
                {
                  file: 'src/core/shape/2d_primitives.js',
                  line: 432,
                  description:
                    '<p>Draw a quad. A quad is a quadrilateral, a four sided polygon. It is\nsimilar to a rectangle, but the angles between its edges are not\nconstrained to ninety degrees. The first pair of parameters (x1,y1)\nsets the first vertex and the subsequent pairs should proceed\nclockwise or counter-clockwise around the defined shape.\nz-arguments only work when quad() is used in WEBGL mode.</p>\n',
                  itemtype: 'method',
                  name: 'quad',
                  chainable: 1,
                  example: [
                    '\n<div>\n<code>\nquad(38, 31, 86, 20, 69, 63, 30, 76);\n</code>\n</div>'
                  ],
                  alt:
                    'irregular white quadrilateral shape with black outline mid-right of canvas.',
                  class: 'p5',
                  module: 'Shape',
                  submodule: '2D Primitives',
                  overloads: [
                    {
                      line: 432,
                      params: [
                        {
                          name: 'x1',
                          description: '<p>the x-coordinate of the first point</p>\n',
                          type: 'Number'
                        },
                        {
                          name: 'y1',
                          description: '<p>the y-coordinate of the first point</p>\n',
                          type: 'Number'
                        },
                        {
                          name: 'x2',
                          description: '<p>the x-coordinate of the second point</p>\n',
                          type: 'Number'
                        },
                        {
                          name: 'y2',
                          description: '<p>the y-coordinate of the second point</p>\n',
                          type: 'Number'
                        },
                        {
                          name: 'x3',
                          description: '<p>the x-coordinate of the third point</p>\n',
                          type: 'Number'
                        },
                        {
                          name: 'y3',
                          description: '<p>the y-coordinate of the third point</p>\n',
                          type: 'Number'
                        },
                        {
                          name: 'x4',
                          description: '<p>the x-coordinate of the fourth point</p>\n',
                          type: 'Number'
                        },
                        {
                          name: 'y4',
                          description: '<p>the y-coordinate of the fourth point</p>\n',
                          type: 'Number'
                        }
                      ],
                      chainable: 1
                    },
                    {
                      line: 462,
                      params: [
                        {
                          name: 'x1',
                          description: '',
                          type: 'Number'
                        },
                        {
                          name: 'y1',
                          description: '',
                          type: 'Number'
                        },
                        {
                          name: 'z1',
                          description: '<p>the z-coordinate of the first point</p>\n',
                          type: 'Number'
                        },
                        {
                          name: 'x2',
                          description: '',
                          type: 'Number'
                        },
                        {
                          name: 'y2',
                          description: '',
                          type: 'Number'
                        },
                        {
                          name: 'z2',
                          description: '<p>the z-coordinate of the second point</p>\n',
                          type: 'Number'
                        },
                        {
                          name: 'x3',
                          description: '',
                          type: 'Number'
                        },
                        {
                          name: 'y3',
                          description: '',
                          type: 'Number'
                        },
                        {
                          name: 'z3',
                          description: '<p>the z-coordinate of the third point</p>\n',
                          type: 'Number'
                        },
                        {
                          name: 'x4',
                          description: '',
                          type: 'Number'
                        },
                        {
                          name: 'y4',
                          description: '',
                          type: 'Number'
                        },
                        {
                          name: 'z4',
                          description: '<p>the z-coordinate of the fourth point</p>\n',
                          type: 'Number'
                        }
                      ],
                      chainable: 1
                    }
                  ]
                },
                {
                  file: 'src/core/shape/2d_primitives.js',
                  line: 499,
                  description:
                    '<p>Draws a rectangle to the screen. A rectangle is a four-sided shape with\nevery angle at ninety degrees. By default, the first two parameters set\nthe location of the upper-left corner, the third sets the width, and the\nfourth sets the height. The way these parameters are interpreted, however,\nmay be changed with the <a href="#/p5/rectMode">rectMode()</a> function.\n<br><br>\nThe fifth, sixth, seventh and eighth parameters, if specified,\ndetermine corner radius for the top-left, top-right, lower-right and\nlower-left corners, respectively. An omitted corner radius parameter is set\nto the value of the previously specified radius value in the parameter list.</p>\n',
                  itemtype: 'method',
                  name: 'rect',
                  chainable: 1,
                  example: [
                    '\n<div>\n<code>\n// Draw a rectangle at location (30, 20) with a width and height of 55.\nrect(30, 20, 55, 55);\n</code>\n</div>\n\n<div>\n<code>\n// Draw a rectangle with rounded corners, each having a radius of 20.\nrect(30, 20, 55, 55, 20);\n</code>\n</div>\n\n<div>\n<code>\n// Draw a rectangle with rounded corners having the following radii:\n// top-left = 20, top-right = 15, bottom-right = 10, bottom-left = 5.\nrect(30, 20, 55, 55, 20, 15, 10, 5);\n</code>\n</div>'
                  ],
                  alt:
                    '55x55 white rect with black outline in mid-right of canvas.\n55x55 white rect with black outline and rounded edges in mid-right of canvas.\n55x55 white rect with black outline and rounded edges of different radii.',
                  class: 'p5',
                  module: 'Shape',
                  submodule: '2D Primitives',
                  overloads: [
                    {
                      line: 499,
                      params: [
                        {
                          name: 'x',
                          description: '<p>x-coordinate of the rectangle.</p>\n',
                          type: 'Number'
                        },
                        {
                          name: 'y',
                          description: '<p>y-coordinate of the rectangle.</p>\n',
                          type: 'Number'
                        },
                        {
                          name: 'w',
                          description: '<p>width of the rectangle.</p>\n',
                          type: 'Number'
                        },
                        {
                          name: 'h',
                          description: '<p>height of the rectangle.</p>\n',
                          type: 'Number'
                        },
                        {
                          name: 'tl',
                          description: '<p>optional radius of top-left corner.</p>\n',
                          type: 'Number',
                          optional: true
                        },
                        {
                          name: 'tr',
                          description: '<p>optional radius of top-right corner.</p>\n',
                          type: 'Number',
                          optional: true
                        },
                        {
                          name: 'br',
                          description: '<p>optional radius of bottom-right corner.</p>\n',
                          type: 'Number',
                          optional: true
                        },
                        {
                          name: 'bl',
                          description: '<p>optional radius of bottom-left corner.</p>\n',
                          type: 'Number',
                          optional: true
                        }
                      ],
                      chainable: 1
                    },
                    {
                      line: 549,
                      params: [
                        {
                          name: 'x',
                          description: '',
                          type: 'Number'
                        },
                        {
                          name: 'y',
                          description: '',
                          type: 'Number'
                        },
                        {
                          name: 'w',
                          description: '',
                          type: 'Number'
                        },
                        {
                          name: 'h',
                          description: '',
                          type: 'Number'
                        },
                        {
                          name: 'detailX',
                          description:
                            '<p>number of segments in the x-direction (for WebGL mode)</p>\n',
                          type: 'Integer',
                          optional: true
                        },
                        {
                          name: 'detailY',
                          description:
                            '<p>number of segments in the y-direction (for WebGL mode)</p>\n',
                          type: 'Integer',
                          optional: true
                        }
                      ],
                      chainable: 1
                    }
                  ]
                },
                {
                  file: 'src/core/shape/2d_primitives.js',
                  line: 582,
                  description:
                    '<p>Draws a square to the screen. A square is a four-sided shape with\nevery angle at ninety degrees, and equal side size.\nThis function is a special case of the rect() function, where the width and height are the same, and the parameter is called &quot;s&quot; for side size.\nBy default, the first two parameters set the location of the upper-left corner, the third sets the side size of the square.\nThe way these parameters are interpreted, however,\nmay be changed with the <a href="#/p5/rectMode">rectMode()</a> function.\n<br><br>\nThe fourth, fifth, sixth and seventh parameters, if specified,\ndetermine corner radius for the top-left, top-right, lower-right and\nlower-left corners, respectively. An omitted corner radius parameter is set\nto the value of the previously specified radius value in the parameter list.</p>\n',
                  itemtype: 'method',
                  name: 'square',
                  params: [
                    {
                      name: 'x',
                      description: '<p>x-coordinate of the square.</p>\n',
                      type: 'Number'
                    },
                    {
                      name: 'y',
                      description: '<p>y-coordinate of the square.</p>\n',
                      type: 'Number'
                    },
                    {
                      name: 's',
                      description: '<p>side size of the square.</p>\n',
                      type: 'Number'
                    },
                    {
                      name: 'tl',
                      description: '<p>optional radius of top-left corner.</p>\n',
                      type: 'Number',
                      optional: true
                    },
                    {
                      name: 'tr',
                      description: '<p>optional radius of top-right corner.</p>\n',
                      type: 'Number',
                      optional: true
                    },
                    {
                      name: 'br',
                      description: '<p>optional radius of bottom-right corner.</p>\n',
                      type: 'Number',
                      optional: true
                    },
                    {
                      name: 'bl',
                      description: '<p>optional radius of bottom-left corner.</p>\n',
                      type: 'Number',
                      optional: true
                    }
                  ],
                  chainable: 1,
                  example: [
                    '\n<div>\n<code>\n// Draw a square at location (30, 20) with a side size of 55.\nsquare(30, 20, 55);\n</code>\n</div>\n\n<div>\n<code>\n// Draw a square with rounded corners, each having a radius of 20.\nsquare(30, 20, 55, 20);\n</code>\n</div>\n\n<div>\n<code>\n// Draw a square with rounded corners having the following radii:\n// top-left = 20, top-right = 15, bottom-right = 10, bottom-left = 5.\nsquare(30, 20, 55, 20, 15, 10, 5);\n</code>\n</div>'
                  ],
                  alt:
                    '55x55 white square with black outline in mid-right of canvas.\n55x55 white square with black outline and rounded edges in mid-right of canvas.\n55x55 white square with black outline and rounded edges of different radii.',
                  class: 'p5',
                  module: 'Shape',
                  submodule: '2D Primitives'
                },
                {
                  file: 'src/core/shape/2d_primitives.js',
                  line: 636,
                  description:
                    '<p>A triangle is a plane created by connecting three points. The first two\narguments specify the first point, the middle two arguments specify the\nsecond point, and the last two arguments specify the third point.</p>\n',
                  itemtype: 'method',
                  name: 'tri