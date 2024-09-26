import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../modules/home/home";
import Rider from "../modules/rider/rider";
import Driver from "../modules/driver/driver";
import HelpSupport from "../modules/help-support/help-support";
import AboutUs from "../modules/about-us/about-us";
import Faq from "../modules/FAQs/faq";
import BlogNews from "../modules/blog-news/blog-news";
import BlogNewsView from "../modules/blog-news/blog-news-view";
import FaqTopicView from "../modules/FAQs/faq-topic-view";
import TopicFaqView from "../modules/FAQs/topic-faq-view";
import FaqView from "../modules/FAQs/faq-view";
import FaqTopicList from "../modules/FAQs/faq-topic-list";
import TermsConditions from "../modules/terms-conditions/terms-conditions";
import CancellationRefundPolicy from "../modules/terms-conditions/Cancellation-Refund-Policy";
import PrivacyPolicies from "../modules/terms-conditions/privacy-policies";

const MainRoute = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rider" element={<Rider />} />
        <Route path="/driver" element={<Driver />} />
        <Route path="/help-support" element={<HelpSupport />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/FAQs/:category/:type" element={<Faq />} />
        <Route path="/FAQs/:category/:type/topic" element={<FaqTopicList />} />
        <Route
          path="/FAQs/:category/:type/topic/:id"
          element={<FaqTopicView />}
        />
        <Route
          path="/FAQs/:category/:type/:topic_id/:id"
          element={<TopicFaqView />}
        />
        <Route path="/FAQs/:category/:type/:id" element={<FaqView />} />
        <Route path="/Blogs-News" element={<BlogNews />} />
        <Route path="/Blogs-News-view/:id/:type" element={<BlogNewsView />} />
        <Route path="/terms-conditions/:type" element={<TermsConditions />} />
        <Route
          path="/cancellation-refund/:type"
          element={<CancellationRefundPolicy />}
        />
        <Route path="/privacy-policies" element={<PrivacyPolicies />} />
      </Routes>
    </>
  );
};

export default MainRoute;
