import { expect } from "chai";
import { shallowMount } from "@vue/test-utils";
import HelloWorld from "@/components/ArticleDetails.vue";
import { isNullOrUndefined } from "util";

describe("ArticleDetails.vue", () => {
  it("sould'nt renders when article is null", () => {
    const wrapper = shallowMount(HelloWorld);
    expect(wrapper.article).to.not.equal(isNullOrUndefined);
  });
  it("sould date is good", () => {
    const wrapper = shallowMount(HelloWorld);
    var start = new Date("2012.08.10").getTime() / 1000;

    expect(wrapper.vm.mydatepost(start)).to.not.equal("2012.08.10");
  });
});
