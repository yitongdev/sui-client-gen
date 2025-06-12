import {
  PhantomReified,
  PhantomToTypeStr,
  PhantomTypeArgument,
  Reified,
  StructClass,
  ToField,
  ToPhantomTypeArgument,
  ToTypeStr,
  assertFieldsWithTypesArgsMatch,
  assertReifiedTypeArgsMatch,
  decodeFromFields,
  decodeFromFieldsWithTypes,
  decodeFromJSONField,
  extractType,
  phantom,
} from "../../../../../_framework/reified.js";
import {
  FieldsWithTypes,
  composeSuiType,
  compressSuiType,
  parseTypeName,
} from "../../../../../_framework/util.js";
import { PKG_V35 } from "../../constants.js";
import { ID, UID } from "../../object/structs/index.js";
import { bcs } from "@mysten/sui/bcs";
import { SuiClient, SuiObjectData, SuiParsedData } from "@mysten/sui/client";
import { fromBase64 } from "@mysten/sui/utils";

export function isTokenPolicyCap(type: string): boolean {
  type = compressSuiType(type);
  return type.startsWith(`${PKG_V35}::token::TokenPolicyCap` + "<");
}

export interface TokenPolicyCapFields<T0 extends PhantomTypeArgument> {
  id: ToField<UID>;
  for: ToField<ID>;
}

export type TokenPolicyCapReified<T0 extends PhantomTypeArgument> = Reified<
  TokenPolicyCap<T0>,
  TokenPolicyCapFields<T0>
>;

/**
 * Move struct: `TokenPolicyCap`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::token`
 *
 * @typeParam T0 - Type parameter 0 (phantom)
 */
export class TokenPolicyCap<T0 extends PhantomTypeArgument> implements StructClass {
  __StructClass = true as const;

  static readonly $typeName = `${PKG_V35}::token::TokenPolicyCap`;
  static readonly $numTypeParams = 1;
  static readonly $isPhantom = [true] as const;

  readonly $typeName = TokenPolicyCap.$typeName;
  readonly $fullTypeName: `${typeof PKG_V35}::token::TokenPolicyCap<${PhantomToTypeStr<T0>}>`;
  readonly $typeArgs: [PhantomToTypeStr<T0>];
  readonly $isPhantom = TokenPolicyCap.$isPhantom;

  readonly id: ToField<UID>;
  readonly for: ToField<ID>;

  private constructor(typeArgs: [PhantomToTypeStr<T0>], fields: TokenPolicyCapFields<T0>) {
    this.$fullTypeName = composeSuiType(
      TokenPolicyCap.$typeName,
      ...typeArgs,
    ) as `${typeof PKG_V35}::token::TokenPolicyCap<${PhantomToTypeStr<T0>}>`;
    this.$typeArgs = typeArgs;

    this.id = fields.id;
    this.for = fields.for;
  }

  static reified<T0 extends PhantomReified<PhantomTypeArgument>>(
    T0: T0,
  ): TokenPolicyCapReified<ToPhantomTypeArgument<T0>> {
    return {
      typeName: TokenPolicyCap.$typeName,
      fullTypeName: composeSuiType(
        TokenPolicyCap.$typeName,
        ...[extractType(T0)],
      ) as `${typeof PKG_V35}::token::TokenPolicyCap<${PhantomToTypeStr<ToPhantomTypeArgument<T0>>}>`,
      typeArgs: [extractType(T0)] as [PhantomToTypeStr<ToPhantomTypeArgument<T0>>],
      isPhantom: TokenPolicyCap.$isPhantom,
      reifiedTypeArgs: [T0],
      fromFields: (fields: Record<string, any>) => TokenPolicyCap.fromFields(T0, fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) => TokenPolicyCap.fromFieldsWithTypes(T0, item),
      fromBcs: (data: Uint8Array) => TokenPolicyCap.fromBcs(T0, data),
      bcs: TokenPolicyCap.bcs,
      fromJSONField: (field: any) => TokenPolicyCap.fromJSONField(T0, field),
      fromJSON: (json: Record<string, any>) => TokenPolicyCap.fromJSON(T0, json),
      fromSuiParsedData: (content: SuiParsedData) => TokenPolicyCap.fromSuiParsedData(T0, content),
      fromSuiObjectData: (content: SuiObjectData) => TokenPolicyCap.fromSuiObjectData(T0, content),
      fetch: async (client: SuiClient, id: string) => TokenPolicyCap.fetch(client, T0, id),
      new: (fields: TokenPolicyCapFields<ToPhantomTypeArgument<T0>>) => {
        return new TokenPolicyCap([extractType(T0)], fields);
      },
      kind: "StructClassReified",
    };
  }

  static get r() {
    return TokenPolicyCap.reified;
  }

  static phantom<T0 extends PhantomReified<PhantomTypeArgument>>(
    T0: T0,
  ): PhantomReified<ToTypeStr<TokenPolicyCap<ToPhantomTypeArgument<T0>>>> {
    return phantom(TokenPolicyCap.reified(T0));
  }
  static get p() {
    return TokenPolicyCap.phantom;
  }

  static get bcs() {
    return bcs.struct("TokenPolicyCap", {
      id: UID.bcs,
      for: ID.bcs,
    });
  }

  static fromFields<T0 extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T0,
    fields: Record<string, any>,
  ): TokenPolicyCap<ToPhantomTypeArgument<T0>> {
    return TokenPolicyCap.reified(typeArg).new({
      id: decodeFromFields(UID.reified(), fields.id),
      for: decodeFromFields(ID.reified(), fields.for),
    });
  }

  static fromFieldsWithTypes<T0 extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T0,
    item: FieldsWithTypes,
  ): TokenPolicyCap<ToPhantomTypeArgument<T0>> {
    if (!isTokenPolicyCap(item.type)) {
      throw new Error("not a TokenPolicyCap type");
    }
    assertFieldsWithTypesArgsMatch(item, [typeArg]);

    return TokenPolicyCap.reified(typeArg).new({
      id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id),
      for: decodeFromFieldsWithTypes(ID.reified(), item.fields.for),
    });
  }

  static fromBcs<T0 extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T0,
    data: Uint8Array,
  ): TokenPolicyCap<ToPhantomTypeArgument<T0>> {
    return TokenPolicyCap.fromFields(typeArg, TokenPolicyCap.bcs.parse(data));
  }

  toJSONField() {
    return {
      id: this.id,
      for: this.for,
    };
  }

  toJSON() {
    return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() };
  }

  static fromJSONField<T0 extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T0,
    field: any,
  ): TokenPolicyCap<ToPhantomTypeArgument<T0>> {
    return TokenPolicyCap.reified(typeArg).new({
      id: decodeFromJSONField(UID.reified(), field.id),
      for: decodeFromJSONField(ID.reified(), field.for),
    });
  }

  static fromJSON<T0 extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T0,
    json: Record<string, any>,
  ): TokenPolicyCap<ToPhantomTypeArgument<T0>> {
    if (json.$typeName !== TokenPolicyCap.$typeName) {
      throw new Error("not a WithTwoGenerics json object");
    }
    assertReifiedTypeArgsMatch(
      composeSuiType(TokenPolicyCap.$typeName, extractType(typeArg)),
      json.$typeArgs,
      [typeArg],
    );

    return TokenPolicyCap.fromJSONField(typeArg, json);
  }

  static fromSuiParsedData<T0 extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T0,
    content: SuiParsedData,
  ): TokenPolicyCap<ToPhantomTypeArgument<T0>> {
    if (content.dataType !== "moveObject") {
      throw new Error("not an object");
    }
    if (!isTokenPolicyCap(content.type)) {
      throw new Error(`object at ${(content.fields as any).id} is not a TokenPolicyCap object`);
    }
    return TokenPolicyCap.fromFieldsWithTypes(typeArg, content);
  }

  static fromSuiObjectData<T0 extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T0,
    data: SuiObjectData,
  ): TokenPolicyCap<ToPhantomTypeArgument<T0>> {
    if (data.bcs) {
      if (data.bcs.dataType !== "moveObject" || !isTokenPolicyCap(data.bcs.type)) {
        throw new Error(`object at ${data.objectId} is not a TokenPolicyCap object`);
      }

      const gotTypeArgs = parseTypeName(data.bcs.type).typeArgs;
      if (gotTypeArgs.length !== 1) {
        throw new Error(
          `type argument mismatch: expected 1 type argument but got '${gotTypeArgs.length}'`,
        );
      }
      const gotTypeArg = gotTypeArgs[0] as string;
      const compressedGotType = compressSuiType(gotTypeArg);
      const expectedTypeArg = compressSuiType(extractType(typeArg));
      if (compressedGotType !== expectedTypeArg) {
        throw new Error(
          `type argument mismatch: expected '${expectedTypeArg}' but got '${compressedGotType}'`,
        );
      }

      return TokenPolicyCap.fromBcs(typeArg, fromBase64(data.bcs.bcsBytes));
    }
    if (data.content) {
      return TokenPolicyCap.fromSuiParsedData(typeArg, data.content);
    }
    throw new Error(
      "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.",
    );
  }

  static async fetch<T0 extends PhantomReified<PhantomTypeArgument>>(
    client: SuiClient,
    typeArg: T0,
    id: string,
  ): Promise<TokenPolicyCap<ToPhantomTypeArgument<T0>>> {
    const res = await client.getObject({ id, options: { showBcs: true } });
    if (res.error) {
      throw new Error(`error fetching TokenPolicyCap object at id ${id}: ${res.error.code}`);
    }
    if (res.data?.bcs?.dataType !== "moveObject" || !isTokenPolicyCap(res.data.bcs.type)) {
      throw new Error(`object at id ${id} is not a TokenPolicyCap object`);
    }

    return TokenPolicyCap.fromSuiObjectData(typeArg, res.data);
  }
}
