<style lang="scss" scoped>
</style>

<template lang="pug">
#page-leaderboard

  section.section#display-section: .container.content
    .section
      h1.title Leaderboard
    .section
      h1.title.is-4 <strong>Competition Information</strong>
      table#name-perf-rank
        tr
          th Team Name
          th Overall
          th J_seen
          th J_unseen
          th F_seen
          th F_unseen
          th Rank
        tr
          td #[strong Jono]
          td #[strong 0.722 (1)]
          td #[strong 0.737 (1)]
          td #[strong 0.648 (2)]
          td #[strong 0.778 (1)]
          td #[strong 0.725 (2)]
          td #[strong 1st]
        tr
          td #[strong speeding_zZ]
          td #[strong 0.720 (2)]
          td #[strong 0.725 (3)]
          td #[strong 0.663 (1)]
          td #[strong 0.752 (3)]
          td #[strong 0.741 (1)]
          td #[strong 2nd]
        tr
          td #[strong mikirui]
          td #[strong 0.699 (3)]
          td #[strong 0.736 (2)]
          td #[strong 0.621 (4)]
          td #[strong 0.755 (2)]
          td #[strong 0.684 (4)]
          td #[strong 3rd]
        tr
          td hi.nine
          td 0.684 (4)
          td 0.706 (5)
          td 0.623 (3)
          td 0.728 (5)
          td 0.677 (5)
          td 4th
        tr
          td sunpeng
          td 0.672 (5)
          td 0.707 (4)
          td 0.598 (6)
          td 0.736 (4)
          td 0.648 (6)
          td 5th
        tr
          td random_name
          td 0.672 (6)
          td 0.672 (6)
          td 0.609 (5)
          td 0.709 (6)
          td 0.697 (3)
          td 5th
        tr
          td kduarte
          td 0.539 (7)
          td 0.594 (7)
          td 0.483 (7)
          td 0.578 (7)
          td 0.502 (7)
          td 7th
        tr
          td SnowFlower
          td 0.448 (8)
          td 0.513 (8)
          td 0.367 (8)
          td 0.494 (8)
          td 0.419 (8)
          td 8th
    .section
      h1.title.is-4 <strong>Team Information</strong>
      p Note: * means equal contribution
      table#team-report
        tr
          th Team Name
          th Team Members
          th Organization
          th Technical Report
        tr
          td Jono
          td Jonathon Luiten, Paul Voigtlaender, Bastian Leibe
          td Computer Vision Group, RWTH Aachen University, Germany
          td <a href="/static/reports/Jono.pdf">Tech Report</a>
        tr
          td speeding_zZ
          td Zilong Huang*, Qiang Zhou*, Lichao Huang, Han Shen, Yongchao Gong, Chang Huang, Wenyu Liu, Xinggang Wang
          td Huazhong University of Science and Technology, Horizon Robotics
          td N/A
        tr
          td mikirui
          td Huaijia Lin*, Ruizheng Wu*, Xiaogang Xu, Xiaojuan Qi, Jiaya Jia
          td The Chinese University of Hong Kong & Tencent YouTu X-Lab
          td <a href="/static/reports/PMSNet.pdf">Slides</a>
        tr
          td hi.nine
          td Wonjoon Goo
          td University of Texas at Austin & Preferred Networks
          td N/A
        tr
          td sunpeng
          td Peng Sun, Mingyu Ding, Guangliang Cheng,  Xi Li
          td Zhejiang University & Renmin University of China & Institute of Remote Sensing and Digital Earth (RADI) & Chinese Academy of Sciences (CAS)
          td N/A
        tr
          td random_name
          td Cunbin Gui, Qi Chen, Qili Deng
          td ByteDance AI Lab
          td N/A
        tr
          td kduarte
          td N/A
          td N/A
          td N/A
        tr
          td SnowFlower
          td Qiong Wang
          td Univ Rennes, INSA Rennes, CNRS, IETR (Institut d'Electronique et de Telecommunication de Rennes) - UMR 6164, F-35000 Rennes, France
          td N/A
    //- .section
    //-   h1.title.is-4 <strong>1st</strong>: Jono
    //-   h1.title.is-5 Jonathon Luiten, Paul Voigtlaender, Bastian Leibe
    //-   h1.title.is-5 Computer Vision Group, RWTH Aachen University, Germany
    //-   p We evaluate our PReMVOS algorithm (Proposal-generation, Refinement and Merging for Video Object Segmentation) on the new YouTube-VOS dataset for the task of semi-supervised video object segmentation (VOS). This task consists of automatically generating accurate and consistent pixel masks for multiple objects in a video sequence, given the object’s first-frame ground truth annotations. The new YouTube-VOS dataset and the corresponding challenge, the 1st Large-scale Video Object Segmentation Challenge, provide a much larger scale evaluation than any previous VOS benchmarks. Our method achieves the best results in the 2018 Large-scale Video Object Segmentation Challenge with a J&F overall mean score over both known and unknown categories of 72.2.
    //-   p <a href="/static/reports/Jono.pdf">[Tech Report]</a>
    //- .section
    //-   h1.title.is-4 <strong>2nd</strong>: speeding_zZ
    //-   h1.title.is-5 Zilong Huang*, Qiang Zhou*, Lichao Huang, Han Shen, Yongchao Gong, Chang Huang, Wenyu Liu, Xinggang Wang (*equal contribution & interns of Horizon Robotics)
    //-   h1.title.is-5 Huazhong University of Science and Technology, Horizon Robotics.
    //-   p Proposal, Tracking & Segmentation (PTS): A cascaded network for video object segmentation
    //-   p We propose a novel video object segmentation architecture which can capture long-term temporal information and handle scale variance in objects.
    //-   p The proposed architecture consists of three components: Region Proposal Network, Object Tracking Network, and Reference-Guided Segmentation Network. The Region Proposal Network is pre-trained on COCO dataset and provides object candidate boxes. Inspired by MDNet, Object Tracking Network is designed to score the candidate boxes and updated online for adapting to large and fast changes in object appearance. Then, the box with the highest score is selected to crop and resize the frame for normalizing the scale variation of objects. Finally, Reference-Guided Segmentation Network will make use of both cropped region with previous mask and the reference frame to segment target object.
    //-   p Besides YouTube-VOS dataset, COCO dataset is used to pre-train Region Proposal Network in this competition.
    //- .section
    //-   h1.title.is-4 <strong>3rd</strong>: mikirui
    //-   h1.title.is-5 Huaijia Lin*, Ruizheng Wu*, Xiaogang Xu, Xiaojuan Qi, Jiaya Jia (* indicates equal contribution)
    //-   h1.title.is-5 The Chinese University of Hong Kong & Tencent YouTu X-Lab
    //-   p Our method consists of two major modules, mask propagation module and re-identification module. Our mask propagation module is built based on flownet2, while taking multiple previous frames and its corresponding masks as guidance to train a flow-appearance propagation network for masks propagation between adjacent frames. For re-identification module, we train a network to generate a 128-dim feature for each position, following the paper "Blazingly Fast Video Object Segmentation with Pixel-Wise Metric Learning". For any two foreground objects, we calculate the number of pixels whose distances to the foreground object in the first image is smaller than that of the background pixels. This indicates similarity degree of two objects. In the inference process, the mask propagated from the previous frame and masks generated by the mask-rcnn are treated as the candidate masks. Then the flownet2 and re-identification modules are used to calculate the appearance and motion consistency for each mask. Finally, the masks with highest score is set to the prediction of current frame. No online training is used in our method. Our method achieve 69.7% in validation set and 69.9% in test set.
    //-   p <a href="/static/reports/PMSNet.pdf">[Slides]</a>
    //- .section
    //-   h1.title.is-4 <strong>4th</strong>: hi.nineare
    //-   h1.title.is-5 University of Texas at Austin & Preferred Networks
    //-   p A combined approach of meta-learning and mask propagation is used for the competition. Basically, the given target objects of a video are tracked by a fine-tuned neural network with given first frame annotation. Yet, the finetuning process is fast and effective because we used a meta-trained network using REPTILE meta-learning framework. Afterward, the output mask from the finetuned network is enhanced with another neural network in which its input is a channel-wise concatenation of (the previous frame, the previous frame prediction, current frame, current frame prediction by the finetuned network). For both of the network, we used a PSP-network pretrained for VOC 2012. The given frames of videos are preprocessed with various operations (crop, reflection, etc..) for training and frames are resized to 600x1200.
    //- .section
    //-   h1.title.is-4 <strong>5th</strong>: sunpeng
    //-   h1.title.is-5 Zhejiang University & Renmin University of China & Institute of Remote Sensing and Digital Earth (RADI) & Chinese Academy of Sciences (CAS)
    //-   p We propose an online video segmentation method for temporal images. Our online video segmentation with Mask-RCNN and Re-id (OVSMAR) model includes an online mask propagation module, a Mask-RCNN module and a Object-Reid module. The online mask propagation module takes the warped prediction result of the previous frame together with the optical flow as input, and outputs the segmentation result of the current frame. This process can be trained end-to-end online with continuous images. Starting from weights pre-trained on ImageNet, COCO and PASCAL VOC, we train this module on Youtube Datasets online. We use the Re-id module to retrieve instances which are missing due to occlusion, motion blur, and out of the camera. We use the Mask-RCNN module trained on MS-COCO to find the missing object which similarity is greater than the threshold, then use the Mask-RCNN segmentation result as the coarse prediction of the object for online mask propagation module, and propagate both forward and backward.      With these three modules iteratively applied, our OVSMAR records a global mean (Region Jaccard and Boundary F measure) of 0.678 on valid dataset and 0.672 on test set.
    //- .section
    //-   h1.title.is-4 <strong>5th</strong>: random_name
    //-   h1.title.is-5 ByteDance AI Lab
    //-   p We first train model on the trainset to distinguish the general object, then fine-tune the model on the augment data of the first frame of the testset videos to distinguish the specific object,  and finally complete the inference with the object tracking bbox.
    //- .section
    //-   h1.title.is-4 <strong>7th</strong>: kduarte
    //- .section
    //-   h1.title.is-4 <strong>8th</strong>: SnowFlower
    //-   h1.title.is-5 Qiong WANG
    //-   h1.title.is-5 Univ Rennes, INSA Rennes, CNRS, IETR (Institut d'Electronique et de Telecommunication de Rennes) - UMR 6164, F-35000 Rennes, France
    //-   p We propose a semantic warping-based video object segmentation (SWVOS) method in the 1st Large-scale Video Object Segmentation Challenge 2018. It firstly addresses the problem of generating fine bounding box for each object, and then produces accurate pixel proposal with a mask-refinement network. More specifically, 1) the mask of an annotated object is warped into other frames.  Considering that the accuracy of warped masks differs due to the deformations, occlusions, and intensity changes in videos, a Warping Confidence approach is proposed to differentiate the warped masks. 2) The warped masks with a high confidence, i.e., within a fine bounding box, are directly fed into a mask-refinement network to get the proposal masks. 3) The others are coped with to obtain fine bounding boxes: those with a middle confidence are put into a coarse-to-fine (CTF) bounding box pipeline, and those with a low confidence are re-warped using a semantics-selection (SEMS) method. For semantics, the Youtube-2018 dataset and COCO dataset are applied for training. Additionally, when occlusion occurs in CTF and SEMS, a few random frames from previous frames are used to detect and/or rewarp. 4) Multiple proposal masks in each video are merged by taking into account the warping confidence. The experimental results show the effectiveness of the proposed approach on the large-scale Youtube-2018 dataset.

</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component
export default class LeaderboardPage extends Vue {
}
</script>
