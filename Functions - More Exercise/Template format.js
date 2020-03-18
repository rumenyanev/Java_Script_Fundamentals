function templateFormat(input){
    let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';

    xml += '<quiz>\n';

    xml = templateFormat(input, xml);

    xml += '</quiz>';

    console.log(xml);

    function templateFormat(arr, str) {
        for (let i = 0; i < arr.length; i += 2) {

            let question = arr[i];
            let answer = arr[i + 1];

            str += '    <question>\n';
            str += `        ${question}\n`;
            str += '    </question>\n';

            str += '    <answer>\n';
            str += `        ${answer}\n`;
            str += '    </answer>\n';
        }

        return str;
    }

}
templateFormat(["Who was the forty-second president of the U.S.A.?",
"William Jefferson Clinton"]);
/*
templateFormat(["Dry ice is a frozen form of which gas?",
"Carbon Dioxide",
"What is the brightest star in the night sky?",
"Sirius"])

/*    3. Template format
Write a JS program that receives data about a quiz and prints it formatted as an XML document. 
The data comes as pairs of question-answer entries. The format of the document should be as follows:
XML
<?xml version="1.0" encoding="UTF-8"?>
<quiz>
  <question>
    {question text}
  </question>
  <answer>
    {answer text}
  </answer>
</quiz>
The input comes as an array of string elements.
The output should be printed on the console.

Examples

Input
["Who was the forty-second president of the U.S.A.?",
"William Jefferson Clinton"]


Output
<?xml version="1.0" encoding="UTF-8"?>
<quiz>
  <question>
    Who was the forty-second president of the U.S.A.?
  </question>
  <answer>
    William Jefferson Clinton
  </answer>
</quiz>

Input
["Dry ice is a frozen form of which gas?",
"Carbon Dioxide",
"What is the brightest star in the night sky?",
"Sirius"]


Output
<?xml version="1.0" encoding="UTF-8"?>
<quiz>
  <question>
    Dry ice is a frozen form of which gas?
  </question>
  <answer>
    Carbon Dioxide
  </answer>
  <question>
    What is the brightest star in the night sky?
  </question>
  <answer>
    Sirius
  </answer>
</quiz>
    */