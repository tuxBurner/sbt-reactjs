export var MoreMessage = React.createClass({displayName: "MoreMessage",
  render:function () {
    var names                = this.props.names;
    return React.createElement("div", null, names.map(function(name)  {return React.createElement("span", null, name);}));
  }
});

ReactDOM.render(React.createElement(MoreMessage, {names: ["John", "Mary"]}), mountNode);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sSUFBSSxpQ0FBaUMsMkJBQUE7RUFDMUMsTUFBTSxTQUFBLElBQUksQ0FBQztJQUNULElBQUksS0FBSyxrQkFBa0IsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUM7SUFDNUMsT0FBTyxvQkFBQSxLQUFJLEVBQUEsSUFBQyxFQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsUUFBQSxDQUFDLElBQUksQ0FBQSxLQUFLLENBQUEsT0FBQSxvQkFBQSxNQUFLLEVBQUEsSUFBQyxFQUFDLElBQVksQ0FBQSxFQUFBLENBQVEsQ0FBQSxDQUFDO0dBQzlEO0FBQ0gsQ0FBQyxDQUFDLENBQUM7O0FBRUgsUUFBUSxDQUFDLE1BQU0sQ0FBQyxvQkFBQyxXQUFXLEVBQUEsQ0FBQSxDQUFDLEtBQUEsRUFBSyxDQUFFLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBRSxDQUFBLENBQUcsQ0FBQSxFQUFFLFNBQVMsQ0FBQyxDQUFDIiwiZmlsZSI6InRyYW5zZm9ybWVkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IHZhciBNb3JlTWVzc2FnZSA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgcmVuZGVyICgpIHtcbiAgICB2YXIgbmFtZXM6IEFycmF5PHN0cmluZz4gPSB0aGlzLnByb3BzLm5hbWVzO1xuICAgIHJldHVybiA8ZGl2PntuYW1lcy5tYXAoKG5hbWUpID0+IDxzcGFuPntuYW1lfTwvc3Bhbj4pfTwvZGl2PjtcbiAgfVxufSk7XG5cblJlYWN0RE9NLnJlbmRlcig8TW9yZU1lc3NhZ2UgbmFtZXM9e1tcIkpvaG5cIiwgXCJNYXJ5XCJdfSAvPiwgbW91bnROb2RlKTtcbiJdfQ==