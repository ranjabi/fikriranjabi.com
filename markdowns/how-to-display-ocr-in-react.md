# Draft
# How to Display OCR in React

In this tutorial, I will show you a step by step to display Optical Character Recognition (OCR) in React. This article will only cover the rendering aspect of OCR. We will use [Azure AI](https://portal.vision.cognitive.azure.com/demo/extract-text-from-images) for the text extraction process. The resources that is used in this article can be downloaded from these links:
- [Github Repository](https://github.com/ranjabi/react-ocr-tutorial)
- [Fake credit card image](https://github.com/ranjabi/react-ocr-tutorial/blob/main/src/ocr-credit-card.jpeg)
- [OCR result](https://github.com/ranjabi/react-ocr-tutorial/blob/main/src/ocrResult.js)

Before we start, I want to introduce you into a thing called Bounding Box. Bounding box is a rectangle that surrounds an object on certain position. For the example, you can see a bounding box that mark the extracted text on a fake credit card number below. We will try to display these bounding boxes from extracted OCR result.

![image](https://github.com/ranjabi/fikriranjabi.com/assets/71055612/7c434803-d5b9-40bb-856d-7f1556b70c16)  
Source: OCR Demo from [Azure AI](https://portal.vision.cognitive.azure.com/demo/extract-text-from-images)

For the simplicity, I will use an example of OCR result from [Azure AI](https://portal.vision.cognitive.azure.com/demo/extract-text-from-images). You can try their demo page to get familiar with their OCR service. The structure of OCR result may vary depending on the service/library you are currently using. But the main concept will still apply. OCR result usually consist of array of lines. Each line object will have words with its bounding box or boundingPolygon position. We will try to extract the bounding box from words object and ignore the other object for now.

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
        ],
        ...
      }
    ]
  }
]
```

Here is the corresponding typescript type:

```
type result = {
    lines: {
        text: string;  # we will ignore this, instead we will use words object below
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

For the first step, let's create an image component to display credit card image and add some styling to it. Import the credit card image file and put it into image source attribute.

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

Add a canvas element and style it with absolute position, we also need to add relative position for canvas parent element (the `wrapper` class). This is necessary to make sure that the canvas will be on the same position as the image. Make sure the size of canvas element is same as the size of the image.

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

To manipulate the canvas element, we need to use `useRef` hook. `useRef` will be used to access canvas element context and draw bounding box rectangles. Assign `useRef` into a variable named `canvasRef` and initialize its value with `null`. After that, fill the canvas element `ref` attribute with `canvasRef` variable we created.

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

We will use `useEffect` hook for drawing mechanism. Add `useEffect` and declare a variable named `context` to store the canvas context. The `getContext()` method will return an object that provides methods for drawing.
```
import result from './ocrResult';

...

useEffect(() => {
  const context = canvasRef.current.getContext('2d')
}, [])
```

Let's get back a bit and remember the structure of our OCR result. Store the OCR result into a separate file named `ocrResult.js` and import it into our main component. To get the first bounding box on a word, we can access it by using `result.lines[0].words.boundingPolygon`. A line can consists of multiple words. Hence, to draw the bounding box for each word, we need to iterate on lines and words object. Our `useEffect` will be like this:
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

- `context.strokeStyle = 'LawnGreen'` is used to set the color of the stroke
- `context.lineWidth = 2` is used to set the line width

The canvas drawing process will be started by calling `beginPath()` method to begin a drawing path. `moveTo()` method will move to the first bounding box point. `lineTo()` method will draw in the path and we call this method multiple times to draw all points. Don't forget to call `closePath()` method because we need to close the current path and get ready to start drawing another bounding box for different word. After that, we call `store()` method to draw all the paths. We will ended up with the result below.

![image](https://github.com/ranjabi/fikriranjabi.com/assets/71055612/013a3d27-b0d1-46d7-aa64-b5e92b21aed0)

That's it, we already draw the OCR result in React. There are many ways of how you can display the OCR result. As you can see below, a demo from [Google Cloud OCR](https://cloud.google.com/use-cases/ocr?hl=en) service will display the result in four different ways:

- Fields
![image](https://github.com/ranjabi/fikriranjabi.com/assets/71055612/87f5f188-1d72-4890-af28-a8a2cc93dc9c)
Some documents like identity card or invoice have a defined structure. With the fields view, you can see that the result will follow the document structure. For examples, we have `currency` filled with `$` and `due_date` filled with `March 17, 2024`
- Key Value Pairs
![image](https://github.com/ranjabi/fikriranjabi.com/assets/71055612/82a3f669-77f0-4913-a829-da2397e772a8)
This will display the result based on detected key value pairs.
- Tables
![image](https://github.com/ranjabi/fikriranjabi.com/assets/71055612/af296490-4349-41f6-b640-b47ed26a77a1)
You can also display the result in the table format. This will be helpful if the document has a lot of tables.
- Detected sentences/words
![image](https://github.com/ranjabi/fikriranjabi.com/assets/71055612/37a35c37-a395-42a1-9e5e-1926f851788b)
This option will detect any sentence on your document. Usually, each sentence can also contain words and its corresponding bounding box.

By seeing the examples from Google Cloud OCR, you can see that we can also add interactivity aspect. For the example, when the user mouse position is placed around the bounding box, it will display a label containing the corresponding text that can be copied. The opposite also applies when the user select the content in the fields, it will set the mark the corresponding bounding box on OCR result.