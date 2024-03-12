# Draft
# How to Display OCR in React

In this tutorial, I will show you a step by step tutorial to display Optical Character Recognition (OCR) in React. This article will only cover the rendering aspect of OCR. We will use Azure AI for the text extraction process.

Before we start, I want to introduce you into a thing called Bounding Box. Bounding box is a rectangle that surrounds an object on certain position. For the example, you can see a bounding box that mark the extracted text on a credit card number below. We will try to display bounding boxes from extracted OCR result.

THE END RESULT WILL BE LIKE THIS: TODO: INSERT IMAGE

![image](https://github.com/ranjabi/fikriranjabi.com/assets/71055612/7c434803-d5b9-40bb-856d-7f1556b70c16)

For the simplicity, I will use an example of OCR result from [Azure AI](https://portal.vision.cognitive.azure.com/demo/extract-text-from-images) as you can see below. You can try their demo page to get familiar with OCR service. The structure of OCR result may vary depending services/library you are currently using. But the main concept still apply. OCR result usually consist of array of lines. Each line object will have a text and words with its bounding box or boundingPolygon attribute. We will try to extract words object and ignore the other object for now.

```
const result = [
  {
    "lines": [
      {
        "words": [
        {
          "text": "Name",
          "boundingPolygon": [
            {
              "x": 85,
              "y": 293
            },
            {
              "x": 140,
              "y": 294
            },
            {
              "x": 139,
              "y": 315
            },
            {
              "x": 84,
              "y": 316
            }
          ],
          "confidence": 0.988
        },
        {
          "text": "Surname",
          "boundingPolygon": [...],
          "confidence": 0.995
        },
        {...}
        ]
      }
    ]
  }
]
```

Here is the corresponding typescript type:

```
const result: {
    lines: {
        text: string;
        boundingPolygon: {
            x: number;
            y: number;
        }[];
        words: {
            text: string;
            boundingPolygon: {
                x: number;
                y: number;
            }[];
            confidence: number;
        }[];
    }[];
}
```

For the first step, let's create a HTML image component to display credit card image and add some styling to it. Don't forget to import the credit card image and put it into image source attribute.

```
import ocrCreditCard from './ocr-credit-card.jpeg'
import './App.css'

function App() {
  return (
    <div className="container">
      <div className="wrapper">
        <img src={ocrCreditCard} alt="ocr-credit-card" width={450} height={450} />
      </div>
    </div>
  );
}

export default App;
```
```
.container {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.wrapper {
  border: 1px solid lightgray;
}
```

The result will be like this:
![image](https://github.com/ranjabi/fikriranjabi.com/assets/71055612/de2f8f83-ebae-46cb-be69-c45350e0dcf3)

Add canvas element and style it with absolute position, we also need to add relative position for canvas parent element. This is necessary to make sure that the canvas will be on the same position as the image. Make sure the size of canvas element is same as the size of the image.

```
import ocrCreditCard from './ocr-credit-card.jpeg'
import './App.css'

function App() {
  return (
    <div className="container">
      <div className="wrapper">
        <img src={ocrCreditCard} alt="ocr-credit-card" width={450} height={450} />
        <canvas width="450" height="450"></canvas>
      </div>
    </div>
  );
}

export default App;
```
```
.container {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.wrapper {
  border: 1px solid lightgray;
  position: relative;
}

.wrapper > canvas {
  position: absolute;
  top: 0;
  left: 0;
}
```

To manipulate the canvas element, we need to use `useRef` hook. `useRef` will be used to access canvas element and draw the bounding box rectangle. Assign `useRef` into a variable named `canvasRef` and initialize its value with `null`. After that, fill the canvas element `ref` attribute with ref variable we created before.

```
import ocrCreditCard from './ocr-credit-card.jpeg'
import './App.css';
import { useRef } from 'react';

function App() {
  const canvasRef = useRef(null)
  
  return (
    <div className="container">
      <div className="wrapper">
        <img src={ocrCreditCard} alt="ocr-credit-card" width={450} height={450} />
        <canvas ref={canvasRef} width="450" height="450"></canvas>
      </div>
    </div>
  );
}

export default App;
```

We will use `useEffect` hook for drawing mechanism. Add `useEffect` and declare a variable named context to store the canvas context. The `getContext()` method will return an object that provides methods for drawing.
```
useEffect(() => {
  const context = canvasRef.current.getContext('2d')
}, [])
```

Let's get back a bit and remember the structure of our OCR result. Store the OCR result into a separate file named `ocrResult.js` and import it into our main component. To get the first bounding box on a word, we can access it by using `result.lines[0].words.boundingPolygon`. Hence, to draw the bounding box for each word, we need to iterate on words object. Our `useEffect` will be like this:
```
useEffect(() => {
  const context = canvasRef.current.getContext('2d')

  result.lines.forEach(line => {
    line.words.forEach(word => {
      const poly = word.boundingPolygon
      context.strokeStyle = 'LawnGreen'
      context.lineWidth = 2
      context.beginPath();
      context.moveTo(poly[0].x, poly[0].y);
      context.lineTo(poly[1].x, poly[1].y);
      context.lineTo(poly[2].x, poly[2].y);
      context.lineTo(poly[3].x, poly[3].y);
      context.closePath();
      context.stroke();
    })
  })
}, [])
```
- `context.strokeStyle = 'LawnGreen'` is used to color the stroke
- `context.lineWidth = 2` is used to set the line width

![image](https://github.com/ranjabi/fikriranjabi.com/assets/71055612/013a3d27-b0d1-46d7-aa64-b5e92b21aed0)

The canvas drawing process will be started by calling `beginPath()` method to begin a path. `moveTo()` will move to the first bounding box point. `lineTo()` will draw in the path. Don't forget to call `closePath()` because we need to start drawing another bounding box for different word. After that, we call `store()` to draw all the paths.


![image](https://github.com/ranjabi/fikriranjabi.com/assets/71055612/87f5f188-1d72-4890-af28-a8a2cc93dc9c)
![image](https://github.com/ranjabi/fikriranjabi.com/assets/71055612/82a3f669-77f0-4913-a829-da2397e772a8)
![image](https://github.com/ranjabi/fikriranjabi.com/assets/71055612/af296490-4349-41f6-b640-b47ed26a77a1)
![image](https://github.com/ranjabi/fikriranjabi.com/assets/71055612/37a35c37-a395-42a1-9e5e-1926f851788b)
