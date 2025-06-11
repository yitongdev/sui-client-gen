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
import { Balance } from "../../balance/structs/index.js";
import { PKG_V31 } from "../../constants.js";
import { UID } from "../../object/structs/index.js";
import { bcs } from "@mysten/sui/bcs";
import { SuiClient, SuiObjectData, SuiParsedData } from "@mysten/sui/client";
import { fromBase64 } from "@mysten/sui/utils";

export function isCoin(type: string): boolean {
  type = compressSuiType(type);
  return type.startsWith(`${PKG_V31}::coin::Coin` + "<");
}

export interface CoinFields<T extends PhantomTypeArgument> {
  id: ToField<UID>;
  balance: ToField<Balance<T>>;
}

export type CoinReified<T extends PhantomTypeArgument> = Reified<
  Coin<T>,
  CoinFields<T>
>;

/**
 * Move struct: `Coin`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::coin`
 *
 * @typeParam T - Type parameter 0 (phantom)
 */
export class Coin<T extends PhantomTypeArgument> implements StructClass {
  __StructClass = true as const;

  static readonly $typeName = `${PKG_V31}::coin::Coin`;
  static readonly $numTypeParams = 1;
  static readonly $isPhantom = [true] as const;

  readonly $typeName = Coin.$typeName;
  readonly $fullTypeName: `${typeof PKG_V31}::coin::Coin<${PhantomToTypeStr<T>}>`;
  readonly $typeArgs: [PhantomToTypeStr<T>];
  readonly $isPhantom = Coin.$isPhantom;

  readonly id: ToField<UID>;
  readonly balance: ToField<Balance<T>>;

  private constructor(typeArgs: [PhantomToTypeStr<T>], fields: CoinFields<T>) {
    this.$fullTypeName = composeSuiType(
      Coin.$typeName,
      ...typeArgs,
    ) as `${typeof PKG_V31}::coin::Coin<${PhantomToTypeStr<T>}>`;
    this.$typeArgs = typeArgs;

    this.id = fields.id;
    this.balance = fields.balance;
  }

  static reified<T extends PhantomReified<PhantomTypeArgument>>(
    T: T,
  ): CoinReified<ToPhantomTypeArgument<T>> {
    return {
      typeName: Coin.$typeName,
      fullTypeName: composeSuiType(
        Coin.$typeName,
        ...[extractType(T)],
      ) as `${typeof PKG_V31}::coin::Coin<${PhantomToTypeStr<ToPhantomTypeArgument<T>>}>`,
      typeArgs: [extractType(T)] as [
        PhantomToTypeStr<ToPhantomTypeArgument<T>>,
      ],
      isPhantom: Coin.$isPhantom,
      reifiedTypeArgs: [T],
      fromFields: (fields: Record<string, any>) => Coin.fromFields(T, fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) =>
        Coin.fromFieldsWithTypes(T, item),
      fromBcs: (data: Uint8Array) => Coin.fromBcs(T, data),
      bcs: Coin.bcs,
      fromJSONField: (field: any) => Coin.fromJSONField(T, field),
      fromJSON: (json: Record<string, any>) => Coin.fromJSON(T, json),
      fromSuiParsedData: (content: SuiParsedData) =>
        Coin.fromSuiParsedData(T, content),
      fromSuiObjectData: (content: SuiObjectData) =>
        Coin.fromSuiObjectData(T, content),
      fetch: async (client: SuiClient, id: string) => Coin.fetch(client, T, id),
      new: (fields: CoinFields<ToPhantomTypeArgument<T>>) => {
        return new Coin([extractType(T)], fields);
      },
      kind: "StructClassReified",
    };
  }

  static get r() {
    return Coin.reified;
  }

  static phantom<T extends PhantomReified<PhantomTypeArgument>>(
    T: T,
  ): PhantomReified<ToTypeStr<Coin<ToPhantomTypeArgument<T>>>> {
    return phantom(Coin.reified(T));
  }
  static get p() {
    return Coin.phantom;
  }

  static get bcs() {
    return bcs.struct("Coin", {
      id: UID.bcs,
      balance: Balance.bcs,
    });
  }

  static fromFields<T extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T,
    fields: Record<string, any>,
  ): Coin<ToPhantomTypeArgument<T>> {
    return Coin.reified(typeArg).new({
      id: decodeFromFields(UID.reified(), fields.id),
      balance: decodeFromFields(Balance.reified(typeArg), fields.balance),
    });
  }

  static fromFieldsWithTypes<T extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T,
    item: FieldsWithTypes,
  ): Coin<ToPhantomTypeArgument<T>> {
    if (!isCoin(item.type)) {
      throw new Error("not a Coin type");
    }
    assertFieldsWithTypesArgsMatch(item, [typeArg]);

    return Coin.reified(typeArg).new({
      id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id),
      balance: decodeFromFieldsWithTypes(
        Balance.reified(typeArg),
        item.fields.balance,
      ),
    });
  }

  static fromBcs<T extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T,
    data: Uint8Array,
  ): Coin<ToPhantomTypeArgument<T>> {
    return Coin.fromFields(typeArg, Coin.bcs.parse(data));
  }

  toJSONField() {
    return {
      id: this.id,
      balance: this.balance.toJSONField(),
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
  ): Coin<ToPhantomTypeArgument<T>> {
    return Coin.reified(typeArg).new({
      id: decodeFromJSONField(UID.reified(), field.id),
      balance: decodeFromJSONField(Balance.reified(typeArg), field.balance),
    });
  }

  static fromJSON<T extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T,
    json: Record<string, any>,
  ): Coin<ToPhantomTypeArgument<T>> {
    if (json.$typeName !== Coin.$typeName) {
      throw new Error("not a WithTwoGenerics json object");
    }
    assertReifiedTypeArgsMatch(
      composeSuiType(Coin.$typeName, extractType(typeArg)),
      json.$typeArgs,
      [typeArg],
    );

    return Coin.fromJSONField(typeArg, json);
  }

  static fromSuiParsedData<T extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T,
    content: SuiParsedData,
  ): Coin<ToPhantomTypeArgument<T>> {
    if (content.dataType !== "moveObject") {
      throw new Error("not an object");
    }
    if (!isCoin(content.type)) {
      throw new Error(
        `object at ${(content.fields as any).id} is not a Coin object`,
      );
    }
    return Coin.fromFieldsWithTypes(typeArg, content);
  }

  static fromSuiObjectData<T extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T,
    data: SuiObjectData,
  ): Coin<ToPhantomTypeArgument<T>> {
    if (data.bcs) {
      if (data.bcs.dataType !== "moveObject" || !isCoin(data.bcs.type)) {
        throw new Error(`object at is not a Coin object`);
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

      return Coin.fromBcs(typeArg, fromBase64(data.bcs.bcsBytes));
    }
    if (data.content) {
      return Coin.fromSuiParsedData(typeArg, data.content);
    }
    throw new Error(
      "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.",
    );
  }

  static async fetch<T extends PhantomReified<PhantomTypeArgument>>(
    client: SuiClient,
    typeArg: T,
    id: string,
  ): Promise<Coin<ToPhantomTypeArgument<T>>> {
    const res = await client.getObject({ id, options: { showBcs: true } });
    if (res.error) {
      throw new Error(
        `error fetching Coin object at id ${id}: ${res.error.code}`,
      );
    }
    if (
      res.data?.bcs?.dataType !== "moveObject" ||
      !isCoin(res.data.bcs.type)
    ) {
      throw new Error(`object at id ${id} is not a Coin object`);
    }

    return Coin.fromSuiObjectData(typeArg, res.data);
  }
}
