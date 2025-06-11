import * as reified from "../../../_framework/reified.js";
import {
  PhantomReified,
  Reified,
  StructClass,
  ToField,
  ToTypeArgument,
  ToTypeStr,
  TypeArgument,
  assertFieldsWithTypesArgsMatch,
  assertReifiedTypeArgsMatch,
  decodeFromFields,
  decodeFromFieldsWithTypes,
  decodeFromJSONField,
  extractType,
  fieldToJSON,
  phantom,
  toBcs,
} from "../../../_framework/reified.js";
import {
  FieldsWithTypes,
  composeSuiType,
  compressSuiType,
  parseTypeName,
} from "../../../_framework/util.js";
import { Vector } from "../../../_framework/vector.js";
import { PKG_V31 } from "../../constants.js";
import { Entry as Entry1 } from "./Entry.js";
import { BcsType, bcs } from "@mysten/sui/bcs";
import { SuiClient, SuiObjectData, SuiParsedData } from "@mysten/sui/client";
import { fromBase64 } from "@mysten/sui/utils";

export function isPriorityQueue(type: string): boolean {
  type = compressSuiType(type);
  return type.startsWith(`${PKG_V31}::priority_queue::PriorityQueue` + "<");
}

export interface PriorityQueueFields<T0 extends TypeArgument> {
  entries: ToField<Vector<Entry1<T0>>>;
}

export type PriorityQueueReified<T0 extends TypeArgument> = Reified<
  PriorityQueue<T0>,
  PriorityQueueFields<T0>
>;

/**
 * Move struct: `PriorityQueue`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::priority_queue`
 *
 * @typeParam T0 - Type parameter 0
 */
export class PriorityQueue<T0 extends TypeArgument> implements StructClass {
  __StructClass = true as const;

  static readonly $typeName = `${PKG_V31}::priority_queue::PriorityQueue`;
  static readonly $numTypeParams = 1;
  static readonly $isPhantom = [false] as const;

  readonly $typeName = PriorityQueue.$typeName;
  readonly $fullTypeName: `${typeof PKG_V31}::priority_queue::PriorityQueue<${ToTypeStr<T0>}>`;
  readonly $typeArgs: [ToTypeStr<T0>];
  readonly $isPhantom = PriorityQueue.$isPhantom;

  readonly entries: ToField<Vector<Entry1<T0>>>;

  private constructor(
    typeArgs: [ToTypeStr<T0>],
    fields: PriorityQueueFields<T0>,
  ) {
    this.$fullTypeName = composeSuiType(
      PriorityQueue.$typeName,
      ...typeArgs,
    ) as `${typeof PKG_V31}::priority_queue::PriorityQueue<${ToTypeStr<T0>}>`;
    this.$typeArgs = typeArgs;

    this.entries = fields.entries;
  }

  static reified<T0 extends Reified<TypeArgument, any>>(
    T0: T0,
  ): PriorityQueueReified<ToTypeArgument<T0>> {
    return {
      typeName: PriorityQueue.$typeName,
      fullTypeName: composeSuiType(
        PriorityQueue.$typeName,
        ...[extractType(T0)],
      ) as `${typeof PKG_V31}::priority_queue::PriorityQueue<${ToTypeStr<ToTypeArgument<T0>>}>`,
      typeArgs: [extractType(T0)] as [ToTypeStr<ToTypeArgument<T0>>],
      isPhantom: PriorityQueue.$isPhantom,
      reifiedTypeArgs: [T0],
      fromFields: (fields: Record<string, any>) =>
        PriorityQueue.fromFields(T0, fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) =>
        PriorityQueue.fromFieldsWithTypes(T0, item),
      fromBcs: (data: Uint8Array) => PriorityQueue.fromBcs(T0, data),
      bcs: PriorityQueue.bcs(toBcs(T0)),
      fromJSONField: (field: any) => PriorityQueue.fromJSONField(T0, field),
      fromJSON: (json: Record<string, any>) => PriorityQueue.fromJSON(T0, json),
      fromSuiParsedData: (content: SuiParsedData) =>
        PriorityQueue.fromSuiParsedData(T0, content),
      fromSuiObjectData: (content: SuiObjectData) =>
        PriorityQueue.fromSuiObjectData(T0, content),
      fetch: async (client: SuiClient, id: string) =>
        PriorityQueue.fetch(client, T0, id),
      new: (fields: PriorityQueueFields<ToTypeArgument<T0>>) => {
        return new PriorityQueue([extractType(T0)], fields);
      },
      kind: "StructClassReified",
    };
  }

  static get r() {
    return PriorityQueue.reified;
  }

  static phantom<T0 extends Reified<TypeArgument, any>>(
    T0: T0,
  ): PhantomReified<ToTypeStr<PriorityQueue<ToTypeArgument<T0>>>> {
    return phantom(PriorityQueue.reified(T0));
  }
  static get p() {
    return PriorityQueue.phantom;
  }

  static get bcs() {
    return <T0 extends BcsType<any>>(T0: T0) =>
      bcs.struct(`PriorityQueue<${T0.name}>`, {
        entries: bcs.vector(Entry1.bcs(T0)),
      });
  }

  static fromFields<T0 extends Reified<TypeArgument, any>>(
    typeArg: T0,
    fields: Record<string, any>,
  ): PriorityQueue<ToTypeArgument<T0>> {
    return PriorityQueue.reified(typeArg).new({
      entries: decodeFromFields(
        reified.vector(Entry1.reified(typeArg)),
        fields.entries,
      ),
    });
  }

  static fromFieldsWithTypes<T0 extends Reified<TypeArgument, any>>(
    typeArg: T0,
    item: FieldsWithTypes,
  ): PriorityQueue<ToTypeArgument<T0>> {
    if (!isPriorityQueue(item.type)) {
      throw new Error("not a PriorityQueue type");
    }
    assertFieldsWithTypesArgsMatch(item, [typeArg]);

    return PriorityQueue.reified(typeArg).new({
      entries: decodeFromFieldsWithTypes(
        reified.vector(Entry1.reified(typeArg)),
        item.fields.entries,
      ),
    });
  }

  static fromBcs<T0 extends Reified<TypeArgument, any>>(
    typeArg: T0,
    data: Uint8Array,
  ): PriorityQueue<ToTypeArgument<T0>> {
    const typeArgs = [typeArg];

    return PriorityQueue.fromFields(
      typeArg,
      PriorityQueue.bcs(toBcs(typeArgs[0])).parse(data),
    );
  }

  toJSONField() {
    return {
      entries: fieldToJSON<Vector<Entry1<T0>>>(
        `vector<${Entry1.$typeName}<${this.$typeArgs[0]}>>`,
        this.entries,
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

  static fromJSONField<T0 extends Reified<TypeArgument, any>>(
    typeArg: T0,
    field: any,
  ): PriorityQueue<ToTypeArgument<T0>> {
    return PriorityQueue.reified(typeArg).new({
      entries: decodeFromJSONField(
        reified.vector(Entry1.reified(typeArg)),
        field.entries,
      ),
    });
  }

  static fromJSON<T0 extends Reified<TypeArgument, any>>(
    typeArg: T0,
    json: Record<string, any>,
  ): PriorityQueue<ToTypeArgument<T0>> {
    if (json.$typeName !== PriorityQueue.$typeName) {
      throw new Error("not a WithTwoGenerics json object");
    }
    assertReifiedTypeArgsMatch(
      composeSuiType(PriorityQueue.$typeName, extractType(typeArg)),
      json.$typeArgs,
      [typeArg],
    );

    return PriorityQueue.fromJSONField(typeArg, json);
  }

  static fromSuiParsedData<T0 extends Reified<TypeArgument, any>>(
    typeArg: T0,
    content: SuiParsedData,
  ): PriorityQueue<ToTypeArgument<T0>> {
    if (content.dataType !== "moveObject") {
      throw new Error("not an object");
    }
    if (!isPriorityQueue(content.type)) {
      throw new Error(
        `object at ${(content.fields as any).id} is not a PriorityQueue object`,
      );
    }
    return PriorityQueue.fromFieldsWithTypes(typeArg, content);
  }

  static fromSuiObjectData<T0 extends Reified<TypeArgument, any>>(
    typeArg: T0,
    data: SuiObjectData,
  ): PriorityQueue<ToTypeArgument<T0>> {
    if (data.bcs) {
      if (
        data.bcs.dataType !== "moveObject" ||
        !isPriorityQueue(data.bcs.type)
      ) {
        throw new Error(`object at is not a PriorityQueue object`);
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

      return PriorityQueue.fromBcs(typeArg, fromBase64(data.bcs.bcsBytes));
    }
    if (data.content) {
      return PriorityQueue.fromSuiParsedData(typeArg, data.content);
    }
    throw new Error(
      "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.",
    );
  }

  static async fetch<T0 extends Reified<TypeArgument, any>>(
    client: SuiClient,
    typeArg: T0,
    id: string,
  ): Promise<PriorityQueue<ToTypeArgument<T0>>> {
    const res = await client.getObject({ id, options: { showBcs: true } });
    if (res.error) {
      throw new Error(
        `error fetching PriorityQueue object at id ${id}: ${res.error.code}`,
      );
    }
    if (
      res.data?.bcs?.dataType !== "moveObject" ||
      !isPriorityQueue(res.data.bcs.type)
    ) {
      throw new Error(`object at id ${id} is not a PriorityQueue object`);
    }

    return PriorityQueue.fromSuiObjectData(typeArg, res.data);
  }
}
