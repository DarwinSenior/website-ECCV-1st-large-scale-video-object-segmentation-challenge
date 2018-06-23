<style lang="scss" scoped>
</style>

<template lang="pug">
#page-guidelines

  section.section#display-section: .container
    .section
      h1.title Guidelines
    .section
      h1.title.is-4 Task
      p The challenge task is the semi-supervised video object segmentation, which targets at segmenting a particular object isntance throughout the entire video sequence given only the object mask of the first frame. Different from previous video object segmentation challenges in CVPR 2017 and 2018, we will provide much larger scale of training and test data to foster various kinds of algorithms. In addition, our test dataset will have  unseen categories which do not exist in the training dataset, in order to evaluate the generalization ability of algorithms.
    .section
      h1.title.is-4 Dataset
      p Our dataset contains three subsets.
      li Train: 3471 video sequences with densely-sampled multi-object annotations. Each object is annotated with a category name, there is 65 categories in traning set.
      li Test-Dev: 474 video sequences with the first-frame annotations. It includes objects from the 65 training categories, and 26 unseen categories in training.  
      li Test-Challenge: Another 508 sequences with the first-frame annotations. It includes objects from the 65 training categories, and 29 unseen categories in training.
      li RGB images and annotations for the labeled frames will be provided. We will also provide a download link for all image frames. Category information for Test-Dev and Test-Challenge will not be released.
      li To download the dataset, checkout 
        a(href='/dataset/download') download 
        | page.
    .section
      h1.title.is-4 Evaluation Metric
      p Similar to a previous video object segmentation challenge 
        a(href='http://davischallenge.org/') DAVIS
        |, we will be using Region Jaccard (J) and Boundary F measure (F) as evaluation metric.  The overall ranking measures will be computed in the following way: 1. compute J and F for both seen and unseen categories, averaged over all corresponding objects. 2. the final score is the average of the four scores: J for seen categories, F for seen categories, J for unseen categories, and F for unseen categories. Note that we have some of the objects start appearing from the middle of videos, we will only compute the metrics from the first occurence of these objects to the end of the video.
    .section
      h1.title.is-4 Result Submission
      p Submission of evaluation results will be made through 
        a(href='https://competitions.codalab.org') CodaLab
        |.
    
    .section
      h1.title.is-4 Paper Submission
      li We will be inviting top-ranking teams to submit short technical papers. The template of the paper is the same as ECCV, but length will be limited to 10 pages including references.
      li All papers will be invited to the workshop in form of oral presentation or poster.
      li Accepted papers will be self-published on the web of the challenge.

    .section
      h1.title.is-4 FAQ
      p 1. Can external datasets be used to train the competition models? 
      p Yes, external datasets can be used. If external datasets are used, it needs to be clarified in the technical papers.

</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component
export default class GuidelinesPage extends Vue {
}
</script>
