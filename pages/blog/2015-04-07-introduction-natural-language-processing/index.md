---
path: '/blog/introduction-natural-language-processing/'
layout: post
title: An Introduction to Natural Language Processing
description: "In this lecture, we will focus on text based machine learning techniques and learn how to make use of these techniques to do text classification and analysis."
date: 2015-04-07 11:21:29
author: eric
categories: ['Tutorials']
image: natural-language-tag-cloud.png
keywords: 'natural language processing'
seo_description: "Natural language processing (NLP) is the study of translation of human language into something a computer can understand and manipulate."
summary: "Natural language processing (NLP) is the study of translation of human language into something a computer can understand and manipulate. The areas of study within NLP are diverse and require a somewhat disparate set of skills. Many of these have evolved with the prevalence of machine learning techniques and practices."
---
<p>Natural language processing (NLP) is the study of translation of human language into something a computer can understand and manipulate.  The areas of study within NLP are diverse and require a somewhat disparate set of skills.  Many of these have evolved with the prevalence of machine learning techniques and practices.</p>

<p>In this lecture, we will focus on text based machine learning techniques and learn how to make use of these techniques to do text classification and analysis.</p>

<h2>A helpful definition - Corpus</h2>

<p>Def: A <strong>corpus</strong> is a collection of written texts, especially the entire works of a particular author or a body of writing on a particular subject.</p>

<p>We make use of a corpus in natural language processing by running various metrics: word count, collocation of words, etc. on the corpus and then apply these statistics to new incoming words.  From this we are able to reasonably guess how frequently a word or set of words should occur.  The question of how to do collocation motivates the use of n-grams which we discuss presently.</p>

<h2>N-grams</h2>

<p>A fundamental technique in natural language processing is the ability to create N-grams.  The best way to understand an N-gram is to see it.</p>

<p>We will use the same sentence throughout:</p>

<p>Hi, my name is Eric.  I work at Syncano and deeply believe all people have the right to freedom.</p>

<p>A 1-gram of that sentence would be:</p>

<p>[('Hi,'), ('my'), ('name'), ('is'), ('Eric.'), ('I'), ('work'), ('at'), ('Syncano'), ('and'), ('deeply'), ('believe'), ('all'), ('people'), ('have'), ('the'), ('right'), ('to'), ('freedom.')]</p>

<p>A 2-gram of that sentence would be:</p>

<p>[('Hi,', 'my'), ('my', 'name'), ('name', 'is'), ('is', 'Eric.'), ('Eric.', 'I'), ('I', 'work'), ('work', 'at'),('at', 'Syncano'), ('Syncano', 'and'), ('and', 'deeply'), ('deeply', 'believe'), ('believe', 'all'), ('all', 'people'), ('people', 'have'), ('have', 'the'), ('the', 'right'), ('right', 'to'), ('to', 'freedom.')]</p>

<p>A 3-gram of that sentence would be:</p>

<p>[('Hi,', 'my', 'name'), ('my', 'name', 'is'), ('name', 'is', 'Eric.'), ('is', 'Eric.', 'I'), ('Eric.', 'I', 'work'), ('I', 'work', 'at'),  ('work', 'at', 'Syncano'), ('at', 'Syncano', 'and'), ('Syncano', 'and', 'deeply'), ('and', 'deeply', 'believe'), ('deeply', 'believe', 'all'), ('believe', 'all', 'people'), ('all', 'people', 'have'), ('people', 'have', 'the'), ('have', 'the', 'right'), ('the', 'right', 'to'), ('right', 'to', 'freedom.')]</p>

<p>As you can see, the number in front of gram determines how many elements we have in each split.  Also, we only increment the element by one in the sentence.  This creates small phrases, which make up the elements of the n-gram.</p>

<p>Here's the code I used to generate the above sequences:</p>

```javascript
def ngram(sentence,n):
    input_list = [elem for elem in sentence.split(" ") if elem != '']
    return zip(*[input_list[i:] for i in xrange(n)])
```

<p>The zip function will zip n many lists together into one list, where the elements of each list will become tuples. A small piece of syntactic sugar you may not be familiar with is the * in front of the list comprehension.</p>

<p>To understand the difference here, let's look at an example:</p>

```javascript
#basic example
def thing(*x): print x
>>> thing([[elem] for elem in xrange(5)])
([[0], [1], [2], [3], [4]],)
>>> thing(*[[elem] for elem in xrange(5)])
([0], [1], [2], [3], [4])

#with zip
>>> zip([[elem] for elem in xrange(5)])
[([0],), ([1],), ([2],), ([3],), ([4],)]
>>> zip(*[[elem] for elem in xrange(5)])
[(0, 1, 2, 3, 4)]
```

<p>As you can see, the * being passed into a function simply empties the elements of the list comprehension one by one, which is exactly what we want for our zip function.</p>

<p>So what can you do with your n-gram?</p>

<p>N-grams have a number of uses <a href="http://en.wikipedia.org/wiki/N-gram">wikipedia</a> illustrates some of these.</p>

<p>However, the simplest (and one of the best) use case is for comparison of writing samples to determine authorship.  The notion is, an author will continually use the same style throughout his or her writing, therefore you can expect phrasing to be repeated across different documents.  Of course, word choice will likely be similar (assuming the author is talking about a similar subject) and the phrases should be similar as well.</p>

<p>So using n-grams we can determine approximate measures (albeit very simple measures) for when two pieces of writing are similar.</p>

<p>So how might we do that:</p>

```javascript
def similarity_analysis(doc_one,doc_two):
    ngrams_one = [ngram(doc_one,elem) for elem in xrange(1,4)]
    ngrams_two = [ngram(doc_two,elem) for elem in xrange(1,4)]

    #longer body of text should be looped through
    if len(ngrams_one) < len(ngrams_two):
        ngrams_one,ngrams_two = ngrams_two, ngrams_one
    word_choice_count = 0 
    phrase_choice_count = 0
    for elem in ngrams_one[0]:
        if elem in ngrams_two[0]:
            word_choice_count += 1
    word_choice_similarity = float(word_choice_count)/len(ngrams_one[0])

    phrases_one = ngrams_one[1] + ngrams_one[2]
    phrases_two = ngrams_two[1] + ngrams_two[2]
    for elem in phrases_one:
        if elem in phrases_two:
            phrase_choice_count += 1
    phrase_choice_similarity = float(phrase_choice_count)/len(phrases_one)
    return word_choice_similarity, phrase_choice_similarity
```

<p>Thus we have meta information about our writing that is extremely simple, But potentially powerful.</p>

<h2>Text classification</h2>

<p>Now that we have a feel for how one might do some initial analysis on words beyond simply counting word frequencies, let's make use of this new knowledge to inform something powerful: the ability to classify text.</p>

<p>Def: <strong>Text classification</strong> allows us to teach a machine how to predict where a given piece of writing is classified.</p>

<p>Here we will look at how to construct a naive bayesian classifier, however there are a <a href="http://textblob.readthedocs.org/en/latest/_modules/textblob/classifiers.html">few worth knowing</a></p>

<h3>Understanding the Naive Bayesian Classifier</h3>

<p>To understand a naive bayesian classifier it's best to understand the steps involved:</p>

<p>1) Hand label a set of texts as certain mappings:</p>

```javascript
[ ("Hello there, I'm Eric","greeting"),
  ("Hi there, I'm Jane","greeting"),
  ("Hi, how are you?","greeting"),
  ("Hello","greeting"),
  ("I'm leaving now, Jane","parting"),
  ("Goodbye","parting"),
  ("parting is such sweet sore, but I'm sleepy, so get out.","parting")
]
```

<p>2) Transform each word in the training set so that it can be described as a set of independent probabilities that map to a given label:</p>

<p>In this case we split each piece of text by mapping the words to numbers:</p>

```javascript
"Hello there, I'm Eric" -> Freq(Hello) = 1,  Freq(there,) = 1,  Freq(I'm) = 1, Freq(Eric) = 1 ->
prob(Hello) = 1/4, prob(there,) = 1/4, prob(I'm) = 1/4, prob(Eric) = 1/4 
```

<p>We then apply one of a set of functions (typically a <a href="http://en.wikipedia.org/wiki/Maximum_likelihood">maximum likelihood estimator</a>) to these mathematical quantities and say this maps to the label.  In this case "greeting."</p>

<p>So we can sort of think of this as:</p>

<p>transform = f("Hello there, I'm Eric")
g(transform) = "greeting"</p>

<p>3) Verification of our model to our liking:</p>

<p>The next step is to provide a verification set that is hand labeled as well.  The model we've constructed from our training set is applied to this verification set and then checked against the expected label.  If the label and the prediction from the model match, we claim the model is correct for this result.</p>

<p>Once we have enough favorable results we are ready to make use of our text classification system for real world problems</p>

<h3>A working example - textblob</h3>

<p>Steps (1) and (2):

```javascript
from textblob.classifiers import NaiveBayesClassifier</p>

train = [
    ('I love this sandwich.', 'pos'),
    ('This is an amazing place!', 'pos'),
    ('I feel very good about these beers.', 'pos'),
    ('This is my best work.', 'pos'),
    ("What an awesome view", 'pos'),
    ('I do not like this restaurant', 'neg'),
    ('I am tired of this stuff.', 'neg'),
    ("I can't deal with this", 'neg'),
    ('He is my sworn enemy!', 'neg'),
    ('My boss is horrible.', 'neg')
]
test = [
    ('The beer was good.', 'pos'),
    ('I do not enjoy my job', 'neg'),
    ("I ain't feeling dandy today.", 'neg'),
    ("I feel amazing!", 'pos'),
    ('Gary is a friend of mine.', 'pos'),
    ("I can't believe I'm doing this.", 'neg')
]
```

<p>Step (3):</p>

```javascript
cl = NaiveBayesClassifier(train)
cl.classify("Their burgers are amazing")  # "pos"
cl.classify("I don't like their pizza.")  # "neg"
```

<p>Some important asides:</p>

<ul>
<li>A Naive Bayesian Classifier doesn't assume order matters.</li>
<li>A Naive Bayesian Classifiers assumes that each word event is unrelated to other words in a given set - word events are considered to be independent.</li>
</ul>


<p>Power uses of such a text classification system is for classifying text in Twitter, establishing the polarity of a piece of text, and many more applications.</p>

<p>Where Naive Bayesian Classifiers tend to be a less elegant solution is document classification.</p>

<p>Say you only have one piece of text and need to be able to compare it against a large set of other texts.  It may be difficult to determine correctly whether or not this given piece of text will do a good job at this.</p>

<h2>Document similarity</h2>

<p>For document similarity we tend to make use of a technique known as document distance.  This technique analyzes a piece of text and assigns it a numerical score, other documents are then scored against this document to see how "distant" (or dissimilar) the documents are.</p>

<p>The simplest of this approach is the cosine similarity of two documents.  The way we apply this technique is by first constructing a vector of the two documents in question (in a very similar fashion to how we did above) and then apply the following formula:</p>

<p>similarity = cos(theta) = A * B / ||A|| * ||B||</p>

<p>Where A,B represent vectors and * is the <a href="http://en.wikipedia.org/wiki/Dot_product">dot product</a></p>

<p>Before applying the cosine similarity function defined above, we first do term frequency-inverse document frequency (tf-idf).</p>

<p>The following definitions were lifted from <a href="www.tfidf.com">this</a></p>

<ul>
<li><p>TF: Term Frequency, which measures how frequently a term occurs in a document. Since every document is different in length, it is possible that a term would appear much more times in long documents than shorter ones. Thus, the term frequency is often divided by the document length (aka. the total number of terms in the document) as a way of normalization:</p>

<p>  TF(t) = (Number of times term t appears in a document) / (Total number of terms in the document).</p></li>
<li><p>IDF: Inverse Document Frequency, which measures how important a term is. While computing TF, all terms are considered equally important. However it is known that certain terms, such as "is", "of", and "that", may appear a lot of times but have little importance. Thus we need to weigh down the frequent terms while scale up the rare ones, by computing the following:</p>

<p>  IDF(t) = log_e(Total number of documents / Number of documents with term t in it).</p></li>
</ul>


<p>We are now in a place to do document similarity:</p>

<p>Some slick <a href="http://stackoverflow.com/questions/12118720/python-tf-idf-cosine-to-find-document-similarity">code from stackoverflow</a>:</p>

```javascript
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.datasets import fetch_20newsgroups 
from sklearn.metrics.pairwise import linear_kernel 
twenty = fetch_20newsgroups()
tfidf = TfidfVectorizer().fit_transform(twenty.data) 
cosine_similarities = linear_kernel(tfidf[0:1], tfidf).flatten() 
related_docs_indices = cosine_similarities.argsort()[:-3:-1] 
```

<p>Understanding linear kernel:</p>

<ul>
<li><a href="http://scikit-learn.org/stable/modules/generated/sklearn.metrics.pairwise.linear_kernel.html">linear kernel sklearn reference</a></li>
<li><a href="http://en.wikipedia.org/wiki/Kernel_%28linear_algebra%29">linear kernal explanation</a></li>
</ul>


<p><a href="http://www.academia.edu/188660/Analysing_Document_Similarity_Measures">A deep understanding of distance measures</a>:</p>

<ul>
<li><a href="http://en.wikipedia.org/wiki/Cosine_similarity">cosine similarity</a></li>
<li><a href="http://en.wikipedia.org/wiki/S%C3%B8rensen%E2%80%93Dice_coefficient">Sørensen–Dice_coefficient</a></li>
<li><a href="http://en.wikipedia.org/wiki/Hamming_distance">hamming distance</a></li>
<li><a href="http://en.wikipedia.org/wiki/Jaccard_index">jaccard index</a></li>
<li><a href="http://en.wikipedia.org/wiki/Jaro%E2%80%93Winkler_distance">Jaro Winkler distance</a></li>
<li><a href="http://en.wikipedia.org/wiki/Levenshtein_distance">Levenshtein distance</a></li>
</ul>


<p>References:</p>

<ul>
<li><a href="https://www.google.com/search?q=definition+corpus">corpus definition - query against google</a></li>
<li><a href="http://nlpwp.org/book/chap-ngrams.xhtml">intro to ngrams in haskell</a></li>
<li><a href="http://textblob.readthedocs.org/en/latest/_modules/textblob/classifiers.html">text classifiers in textblob</a></li>
<li><a href="http://en.wikipedia.org/wiki/Naive_Bayes_classifier">An explanation of naive bayesian classifiers</a></li>
<li><a href="http://machinelearningmastery.com/naive-bayes-classifier-scratch-python/">a Naive Bayesian Classifier - from scratch</a></li>
<li><a href="https://web.stanford.edu/class/cs124/lec/naivebayes.pdf">a wonderful introduction on naive classifiers from stanford</a></li>
<li><a href="http://www.tfidf.com/">tf-idf</a></li>
</ul>