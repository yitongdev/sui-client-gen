import {
  PhantomReified,
  Reified,
  StructClass,
  ToField,
  ToTypeStr,
  decodeFromFields,
  decodeFromFieldsWithTypes,
  decodeFromJSONField,
  fieldToJSON,
  phantom,
} from "../../../../../_framework/reified.js";
import {
  FieldsWithTypes,
  composeSuiType,
  compressSuiType,
} from "../../../../../_framework/util.js";
import { Option } from "../../../0x1/option/structs/index.js";
import { PKG_V21 } from "../../constants.js";
import { bcs } from "@mysten/sui/bcs";
import { SuiClient, SuiObjectData, SuiParsedData } from "@mysten/sui/client";
import { fromBase64, fromHex, toHex } from "@mysten/sui/utils";

export function isTokenAllocation(type: string): boolean {
  type = compressSuiType(type);
  return type === `${PKG_V21}::genesis::TokenAllocation`;
}

export interface TokenAllocationFields {
  recipientAddress: ToField<"address">;
  amountMist: ToField<"u64">;
  stakedWithValidator: ToField<Option<"address">>;
}

export type TokenAllocationReified = Reified<
  TokenAllocation,
  TokenAllocationFields
>;

/**
 * Move struct: `TokenAllocation`
 * Module: `0000000000000000000000000000000000000000000000000000000000000003::genesis`
 */
export class TokenAllocation implements StructClass {
  __StructClass = true as const;

  static readonly $typeName = `${PKG_V21}::genesis::TokenAllocation`;
  static readonly $numTypeParams = 0;
  static readonly $isPhantom = [] as const;

  readonly $typeName = TokenAllocation.$typeName;
  readonly $fullTypeName: `${typeof PKG_V21}::genesis::TokenAllocation`;
  readonly $typeArgs: [];
  readonly $isPhantom = TokenAllocation.$isPhantom;

  readonly recipientAddress: ToField<"address">;
  readonly amountMist: ToField<"u64">;
  readonly stakedWithValidator: ToField<Option<"address">>;

  private constructor(typeArgs: [], fields: TokenAllocationFields) {
    this.$fullTypeName = composeSuiType(
      TokenAllocation.$typeName,
      ...typeArgs,
    ) as `${typeof PKG_V21}::genesis::TokenAllocation`;
    this.$typeArgs = typeArgs;

    this.recipientAddress = fields.recipientAddress;
    this.amountMist = fields.amountMist;
    this.stakedWithValidator = fields.stakedWithValidator;
  }

  static reified(): TokenAllocationReified {
    return {
      typeName: TokenAllocation.$typeName,
      fullTypeName: composeSuiType(
        TokenAllocation.$typeName,
        ...[],
      ) as `${typeof PKG_V21}::genesis::TokenAllocation`,
      typeArgs: [] as [],
      isPhantom: TokenAllocation.$isPhantom,
      reifiedTypeArgs: [],
      fromFields: (fields: Record<string, any>) =>
        TokenAllocation.fromFields(fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) =>
        TokenAllocation.fromFieldsWithTypes(item),
      fromBcs: (data: Uint8Array) => TokenAllocation.fromBcs(data),
      bcs: TokenAllocation.bcs,
      fromJSONField: (field: any) => TokenAllocation.fromJSONField(field),
      fromJSON: (json: Record<string, any>) => TokenAllocation.fromJSON(json),
      fromSuiParsedData: (content: SuiParsedData) =>
        TokenAllocation.fromSuiParsedData(content),
      fromSuiObjectData: (content: SuiObjectData) =>
        TokenAllocation.fromSuiObjectData(content),
      fetch: async (client: SuiClient, id: string) =>
        TokenAllocation.fetch(client, id),
      new: (fields: TokenAllocationFields) => {
        return new TokenAllocation([], fields);
      },
      kind: "StructClassReified",
    };
  }

  static get r() {
    return TokenAllocation.reified();
  }

  static phantom(): PhantomReified<ToTypeStr<TokenAllocation>> {
    return phantom(TokenAllocation.reified());
  }
  static get p() {
    return TokenAllocation.phantom();
  }

  static get bcs() {
    return bcs.struct("TokenAllocation", {
      recipient_address: bcs.bytes(32).transform({
        input: (val: string) => fromHex(val),
        output: (val: Uint8Array) => toHex(val),
      }),
      amount_mist: bcs.u64(),
      staked_with_validator: Option.bcs(
        bcs.bytes(32).transform({
          input: (val: string) => fromHex(val),
          output: (val: Uint8Array) => toHex(val),
        }),
      ),
    });
  }

  static fromFields(fields: Record<string, any>): TokenAllocation {
    return TokenAllocation.reified().new({
      recipientAddress: decodeFromFields("address", fields.recipient_address),
      amountMist: decodeFromFields("u64", fields.amount_mist),
      stakedWithValidator: decodeFromFields(
        Option.reified("address"),
        fields.staked_with_validator,
      ),
    });
  }

  static fromFieldsWithTypes(item: FieldsWithTypes): TokenAllocation {
    if (!isTokenAllocation(item.type)) {
      throw new Error("not a TokenAllocation type");
    }

    return TokenAllocation.reified().new({
      recipientAddress: decodeFromFieldsWithTypes(
        "address",
        item.fields.recipient_address,
      ),
      amountMist: decodeFromFieldsWithTypes("u64", item.fields.amount_mist),
      stakedWithValidator: decodeFromFieldsWithTypes(
        Option.reified("address"),
        item.fields.staked_with_validator,
      ),
    });
  }

  static fromBcs(data: Uint8Array): TokenAllocation {
    return TokenAllocation.fromFields(TokenAllocation.bcs.parse(data));
  }

  toJSONField() {
    return {
      recipientAddress: this.recipientAddress,
      amountMist: this.amountMist.toString(),
      stakedWithValidator: fieldToJSON<Option<"address">>(
        `${Option.$typeName}<address>`,
        this.stakedWithValidator,
      ),
    };
  }

  toJSON() {
    return {
      $typeName: this.$typeName,
      $typeArgs: this.$typeArgs,
      ...this.toJSONField(),
    };
  }

  static fromJSONField(field: any): TokenAllocation {
    return TokenAllocation.reified().new({
      recipientAddress: decodeFromJSONField("address", field.recipientAddress),
      amountMist: decodeFromJSONField("u64", field.amountMist),
      stakedWithValidator: decodeFromJSONField(
        Option.reified("address"),
        field.stakedWithValidator,
      ),
    });
  }

  static fromJSON(json: Record<string, any>): TokenAllocation {
    if (json.$typeName !== TokenAllocation.$typeName) {
      throw new Error("not a WithTwoGenerics json object");
    }

    return TokenAllocation.fromJSONField(json);
  }

  static fromSuiParsedData(content: SuiParsedData): TokenAllocation {
    if (content.dataType !== "moveObject") {
      throw new Error("not an object");
    }
    if (!isTokenAllocation(content.type)) {
      throw new Error(
        `object at ${(content.fields as any).id} is not a TokenAllocation object`,
      );
    }
    return TokenAllocation.fromFieldsWithTypes(content);
  }

  static fromSuiObjectData(data: SuiObjectData): TokenAllocation {
    if (data.bcs) {
      if (
        data.bcs.dataType !== "moveObject" ||
        !isTokenAllocation(data.bcs.type)
      ) {
        throw new Error(`object at is not a TokenAllocation object`);
      }

      return TokenAllocation.fromBcs(fromBase64(data.bcs.bcsBytes));
    }
    if (data.content) {
      return TokenAllocation.fromSuiParsedData(data.content);
    }
    throw new Error(
      "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.",
    );
  }

  static async fetch(client: SuiClient, id: string): Promise<TokenAllocation> {
    const res = await client.getObject({ id, options: { showBcs: true } });
    if (res.error) {
      throw new Error(
        `error fetching TokenAllocation object at id ${id}: ${res.error.code}`,
      );
    }
    if (
      res.data?.bcs?.dataType !== "moveObject" ||
      !isTokenAllocation(res.data.bcs.type)
    ) {
      throw new Error(`object at id ${id} is not a TokenAllocation object`);
    }

    return TokenAllocation.fromSuiObjectData(res.data);
  }
}
