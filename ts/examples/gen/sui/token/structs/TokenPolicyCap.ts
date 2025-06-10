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
} from "../../../_framework/reified.js";
import {
  FieldsWithTypes,
  composeSuiType,
  compressSuiType,
  parseTypeName,
} from "../../../_framework/util.js";
import { PKG_V31 } from "../../constants.js";
import { ID, UID } from "../../object/structs/index.js";
import { bcs } from "@mysten/sui/bcs";
import { SuiClient, SuiObjectData, SuiParsedData } from "@mysten/sui/client";
import { fromBase64 } from "@mysten/sui/utils";

export function isTokenPolicyCap(type: string): boolean {
  type = compressSuiType(type);
  return type.startsWith(`${PKG_V31}::token::TokenPolicyCap` + "<");
}

export interface TokenPolicyCapFields<T extends PhantomTypeArgument> {
  id: ToField<UID>;
  for: ToField<ID>;
}

export type TokenPolicyCapReified<T extends PhantomTypeArgument> = Reified<
  TokenPolicyCap<T>,
  TokenPolicyCapFields<T>
>;

/**
 * Move struct: `TokenPolicyCap`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::token`
 *
 * @typeParam T - Type parameter 0 (phantom)
 */
export class TokenPolicyCap<T extends PhantomTypeArgument>
  implements StructClass
{
  __StructClass = true as const;

  static readonly $typeName = `${PKG_V31}::token::TokenPolicyCap`;
  static readonly $numTypeParams = 1;
  static readonly $isPhantom = [true] as const;

  readonly $typeName = TokenPolicyCap.$typeName;
  readonly $fullTypeName: `${typeof PKG_V31}::token::TokenPolicyCap<${PhantomToTypeStr<T>}>`;
  readonly $typeArgs: [PhantomToTypeStr<T>];
  readonly $isPhantom = TokenPolicyCap.$isPhantom;

  readonly id: ToField<UID>;
  readonly for: ToField<ID>;

  private constructor(
    typeArgs: [PhantomToTypeStr<T>],
    fields: TokenPolicyCapFields<T>,
  ) {
    this.$fullTypeName = composeSuiType(
      TokenPolicyCap.$typeName,
      ...typeArgs,
    ) as `${typeof PKG_V31}::token::TokenPolicyCap<${PhantomToTypeStr<T>}>`;
    this.$typeArgs = typeArgs;

    this.id = fields.id;
    this.for = fields.for;
  }

  static reified<T extends PhantomReified<PhantomTypeArgument>>(
    T: T,
  ): TokenPolicyCapReified<ToPhantomTypeArgument<T>> {
    return {
      typeName: TokenPolicyCap.$typeName,
      fullTypeName: composeSuiType(
        TokenPolicyCap.$typeName,
        ...[extractType(T)],
      ) as `${typeof PKG_V31}::token::TokenPolicyCap<${PhantomToTypeStr<ToPhantomTypeArgument<T>>}>`,
      typeArgs: [extractType(T)] as [
        PhantomToTypeStr<ToPhantomTypeArgument<T>>,
      ],
      isPhantom: TokenPolicyCap.$isPhantom,
      reifiedTypeArgs: [T],
      fromFields: (fields: Record<string, any>) =>
        TokenPolicyCap.fromFields(T, fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) =>
        TokenPolicyCap.fromFieldsWithTypes(T, item),
      fromBcs: (data: Uint8Array) => TokenPolicyCap.fromBcs(T, data),
      bcs: TokenPolicyCap.bcs,
      fromJSONField: (field: any) => TokenPolicyCap.fromJSONField(T, field),
      fromJSON: (json: Record<string, any>) => TokenPolicyCap.fromJSON(T, json),
      fromSuiParsedData: (content: SuiParsedData) =>
        TokenPolicyCap.fromSuiParsedData(T, content),
      fromSuiObjectData: (content: SuiObjectData) =>
        TokenPolicyCap.fromSuiObjectData(T, content),
      fetch: async (client: SuiClient, id: string) =>
        TokenPolicyCap.fetch(client, T, id),
      new: (fields: TokenPolicyCapFields<ToPhantomTypeArgument<T>>) => {
        return new TokenPolicyCap([extractType(T)], fields);
      },
      kind: "StructClassReified",
    };
  }

  static get r() {
    return TokenPolicyCap.reified;
  }

  static phantom<T extends PhantomReified<PhantomTypeArgument>>(
    T: T,
  ): PhantomReified<ToTypeStr<TokenPolicyCap<ToPhantomTypeArgument<T>>>> {
    return phantom(TokenPolicyCap.reified(T));
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

  static fromFields<T extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T,
    fields: Record<string, any>,
  ): TokenPolicyCap<ToPhantomTypeArgument<T>> {
    return TokenPolicyCap.reified(typeArg).new({
      id: decodeFromFields(UID.reified(), fields.id),
      for: decodeFromFields(ID.reified(), fields.for),
    });
  }

  static fromFieldsWithTypes<T extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T,
    item: FieldsWithTypes,
  ): TokenPolicyCap<ToPhantomTypeArgument<T>> {
    if (!isTokenPolicyCap(item.type)) {
      throw new Error("not a TokenPolicyCap type");
    }
    assertFieldsWithTypesArgsMatch(item, [typeArg]);

    return TokenPolicyCap.reified(typeArg).new({
      id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id),
      for: decodeFromFieldsWithTypes(ID.reified(), item.fields.for),
    });
  }

  static fromBcs<T extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T,
    data: Uint8Array,
  ): TokenPolicyCap<ToPhantomTypeArgument<T>> {
    return TokenPolicyCap.fromFields(typeArg, TokenPolicyCap.bcs.parse(data));
  }

  toJSONField() {
    return {
      id: this.id,
      for: this.for,
    };
  }

  toJSON() {
    return {
      $typeName: this.$typeName,
      $typeArgs: this.$typeArgs,
      ...this.toJSONField(),
    };
  }

  static fromJSONField<T extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T,
    field: any,
  ): TokenPolicyCap<ToPhantomTypeArgument<T>> {
    return TokenPolicyCap.reified(typeArg).new({
      id: decodeFromJSONField(UID.reified(), field.id),
      for: decodeFromJSONField(ID.reified(), field.for),
    });
  }

  static fromJSON<T extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T,
    json: Record<string, any>,
  ): TokenPolicyCap<ToPhantomTypeArgument<T>> {
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

  static fromSuiParsedData<T extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T,
    content: SuiParsedData,
  ): TokenPolicyCap<ToPhantomTypeArgument<T>> {
    if (content.dataType !== "moveObject") {
      throw new Error("not an object");
    }
    if (!isTokenPolicyCap(content.type)) {
      throw new Error(
        `object at ${(content.fields as any).id} is not a TokenPolicyCap object`,
      );
    }
    return TokenPolicyCap.fromFieldsWithTypes(typeArg, content);
  }

  static fromSuiObjectData<T extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T,
    data: SuiObjectData,
  ): TokenPolicyCap<ToPhantomTypeArgument<T>> {
    if (data.bcs) {
      if (
        data.bcs.dataType !== "moveObject" ||
        !isTokenPolicyCap(data.bcs.type)
      ) {
        throw new Error(`object at is not a TokenPolicyCap object`);
      }

      const gotTypeArgs = parseTypeName(data.bcs.type).typeArgs;
      if (gotTypeArgs.length !== 1) {
        throw new Error(
          `type argument mismatch: expected 1 type argument but got '${gotTypeArgs.length}'`,
        );
      }
      const gotTypeArg = compressSuiType(gotTypeArgs[0]);
      const expectedTypeArg = compressSuiType(extractType(typeArg));
      if (gotTypeArg !== compressSuiType(extractType(typeArg))) {
        throw new Error(
          `type argument mismatch: expected '${expectedTypeArg}' but got '${gotTypeArg}'`,
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

  static async fetch<T extends PhantomReified<PhantomTypeArgument>>(
    client: SuiClient,
    typeArg: T,
    id: string,
  ): Promise<TokenPolicyCap<ToPhantomTypeArgument<T>>> {
    const res = await client.getObject({ id, options: { showBcs: true } });
    if (res.error) {
      throw new Error(
        `error fetching TokenPolicyCap object at id ${id}: ${res.error.code}`,
      );
    }
    if (
      res.data?.bcs?.dataType !== "moveObject" ||
      !isTokenPolicyCap(res.data.bcs.type)
    ) {
      throw new Error(`object at id ${id} is not a TokenPolicyCap object`);
    }

    return TokenPolicyCap.fromSuiObjectData(typeArg, res.data);
  }
}
