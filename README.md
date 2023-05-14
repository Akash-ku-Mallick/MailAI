<h1 align="center">Mail-AI</h1>
<h2 align="center">Hi 👋, I'm Akash Kumar Mallick</h2>
<h3 align="center">IF you want a Front-end and Mobile App Developer skilled in Figma, API integration, and Flutter, then I an Akash Kumar. I easily understands client needs to deliver effective solutions.</h3>
<h2>Idea</h2>
<p>The idea to form the project came from this Python code. Here, I applied openai API calls to get reply of a prompt</p>

```python
  import openai 
  def prmt_input(name, recruiter=input("recruiter's name : ")
               , company_name=input("company name : ")
               , word_count=input("word count : ")
               , position=input("Enter position : ")
               , skills_required=input("Skills they required : ")
               , skills_i_have=input("Skills I have : ")) -> str:
    prmt = "I want you to write a message to " + recruiter + " for applying into " \
           + company_name + " for the " + position + ". They are looking for " \
           + skills_required + ". I am " + name + " an I bring " \
           + skills_i_have + " to the table. Write it under " + word_count + " words."
    return prmt


def fun():
    openai.api_key = "-------Your Api Key--------"
    you = input("Enter your name : ")
    prompt = prmt_input(you)
    chat_res = openai.ChatCompletion.create(model="gpt-3.5-turbo", messages=[{"role": "user", "content": prompt}])
    print(chat_res.choices[0].message.content)


if __name__ == "__main__":
    fun()
```

<h2 align="center">OUTPUT</h2>

![09 05 2023_19 43 21_REC](https://github.com/Akash-ku-Mallick/MailAI/assets/99015782/d35b4b3f-88f9-4199-b0ad-c86ecebb4538)

