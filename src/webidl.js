function createWebIDLContext() {
  const webidl = {
    console_assert: function() {
      console.assert();
    },
    console_clear: function() {
      console.clear();
    },
    console_count: function() {
      console.count();
    },
    console_countReset: function() {
      console.countReset();
    },
    console_debug: function() {
      console.debug();
    },
    console_error: function() {
      console.error();
    },
    console_info: function() {
      console.info();
    },
    console_log: function() {
      console.log();
    },
    console_table: function() {
      console.table();
    },
    console_trace: function() {
      console.trace();
    },
    console_warn: function() {
      console.warn();
    },
    console_dir: function() {
      console.dir();
    },
    console_dirxml: function() {
      console.dirxml();
    },
    console_group: function() {
      console.group();
    },
    console_groupCollapsed: function() {
      console.groupCollapsed();
    },
    console_groupEnd: function() {
      console.groupEnd();
    },
    console_time: function() {
      console.time();
    },
    console_timeLog: function() {
      console.timeLog();
    },
    console_timeEnd: function() {
      console.timeEnd();
    },
    console_exception: function() {
      console.exception();
    },
    console_timeStamp: function() {
      console.timeStamp();
    },
    console_profile: function() {
      console.profile();
    },
    console_profileEnd: function() {
      console.profileEnd();
    },
    console_createInstance: function() {
      console.createInstance();
    }
  };
  return webidl;
}

export default createWebIDLContext;
