// Copyright © 2017-2022 Posi Wallet.
//
// This file is part of Posi Wallet. The full copyright notice, including
// terms governing use, modification, and redistribution, is contained in the
// file LICENSE at the root of the source code distribution tree.

"use strict";

class ProviderRpcError extends Error {
  constructor(code, message) {
    super();
    this.code = code;
    this.message = message;
  }

  toString() {
    return `${this.message} (${this.code})`;
  }
}

module.exports = ProviderRpcError;
