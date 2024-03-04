# Draft
# How to Display OCR in React

In this tutorial, I will show you step by step to display Optical Character Recognition (OCR) in React. This article will only cover the rendering aspect of OCR. I will use Google Vertex AI for the text extraction process.

Before we start, I want to introduce you into a thing called Bounding Box. Bounding box is a rectangle that surrounds an object on certain position. For the example, you can see bounding box that mark the extracted text on a credit card number below. This will be the main part of rendering process.

![image](https://github.com/ranjabi/fikriranjabi.com/assets/71055612/7c434803-d5b9-40bb-856d-7f1556b70c16)

For the simplicity, I will use an example of OCR result from [Azure AI](https://portal.vision.cognitive.azure.com/demo/extract-text-from-images). You can try their demo page to get familiar with OCR service. The structure of OCR result may vary depending services/library you are currently using. But the main concept still apply. OCR result usually consist of array of lines. Each line object will have a text and words with its boundingPolygon. Only words have the information about confidence level. We will try to extract words object and ignore the text object for now.

```
[
  {
    "lines": [
      {
        "text": "Name Surname",
        "boundingPolygon": [...],
        "words": [
          {
            "text": "Name",
            "boundingPolygon": [
              {
                "x": 868,
                "y": 2952
              },
              {
                "x": 1395,
                "y": 2954
              },
              {
                "x": 1397,
                "y": 3141
              },
              {
                "x": 872,
                "y": 3146
              }
            ],
            "confidence": 0.992
          },
          {
            "text": "Surname",
            "boundingPolygon": [
              {
                "x": 1587,
                "y": 2955
              },
              {
                "x": 2543,
                "y": 2949
              },
              {
                "x": 2543,
                "y": 3152
              },
              {
                "x": 1589,
                "y": 3141
              }
            ],
            "confidence": 0.994
          }
        ]
      }
    ]
  }
]
```

For the first step, let's create a HTML image component to display credit card image.
```
TODO
```

![image](https://github.com/ranjabi/fikriranjabi.com/assets/71055612/87f5f188-1d72-4890-af28-a8a2cc93dc9c)
![image](https://github.com/ranjabi/fikriranjabi.com/assets/71055612/82a3f669-77f0-4913-a829-da2397e772a8)
![image](https://github.com/ranjabi/fikriranjabi.com/assets/71055612/af296490-4349-41f6-b640-b47ed26a77a1)
![image](https://github.com/ranjabi/fikriranjabi.com/assets/71055612/37a35c37-a395-42a1-9e5e-1926f851788b)
