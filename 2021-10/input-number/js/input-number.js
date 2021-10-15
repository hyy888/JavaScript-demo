function isValueNumber(value) {
  return(/(^-?[0-9]+\.{1}\d+$)|(^-?[1-9][0-9]*$)|(^-?0{1}$)/).test(value + '');
}
Vue.component('input-number', {
  // template: '\
  //   <div class="input-number">\
  //     <input type="text" :value="currentValue" @change="handleChange" />\
  //     <button @click="handleDown" :disabled="currentValue <= min">-</button>\
  //     <button @click="handleUp" :disabled="currentValue >= max">+</button>\
  //   </div>',
  template: '#number',
  props: {
    max: {
      type: Number,
      default: -Infinity
    },
    min: {
      type: Number,
      default: -Infinity
    },
    value: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      currentValue: this.value,
    };
  },
  watch: {
    currentValue(val) {
      this.$emit('input', val);
      // 这里未使用自定义事件
      this.$emit('on-change', val);
    },
    value(val) {
      // updateValue是为了过滤数据
      this.updateValue(val);
    }
  },
  methods: {
    handleDown() {
      if(this.currentValue <= this.min) return;
      this.currentValue -= 1;
    },
    step() {
      if(this.currentValue <= this.min) return;
      this.currentValue -= 10;
    },
    handleUp() {
      if(this.currentValue >= this.max) return;
      this.currentValue += 1;
    },
    prop() {
      if(this.currentValue >= this.max) return;
      this.currentValue += 10;
    },
    updateValue(val) {
      if (val > this.max) val = this.max;
      if (val < this.min) val = this.min;
      this.currentValue = val;
    },
    handleChange(event) {
      // trim() 方法用于删除字符串的头尾空白符
      // 空白符包括：空格、制表符 tab、换行符等其他空白符等
      var val = event.target.value.trim();
      var max = this.max;
      var min = this.min;
      if (isValueNumber(val)) {
        val = Number(val);
        this.currentValue = val;
        if (val >max) {
          this.currentValue = max;
        } else if (val < min) {
          this.currentValue = min;
        }
      }else {
        event.target.value = this.currentValue;
      }
    }
  },
  mounted() {
    this.updateValue(this.value);
  },

})