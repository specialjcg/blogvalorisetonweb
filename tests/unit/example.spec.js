import { expect } from "chai";
import { shallowMount } from "@vue/test-utils";
import HelloWorld from "@/components/ArticleDetails.vue";

describe("ArticleDetails.vue", () => {
  it("renders $router.name", () => {
    const $route = {
      name: "article/1"
    };
    const wrapper = shallowMount(HelloWorld, {
      mocks: {
        $route
      }
    });
    expect(wrapper.id).to.equal("1");
  });
  it("sould date is good", () => {
    const wrapper = shallowMount(HelloWorld);
    var start = "2012.08.10";

    expect(wrapper.vm.mydatepost(start)).to.not.equal("2012.08.10");
  });
});
